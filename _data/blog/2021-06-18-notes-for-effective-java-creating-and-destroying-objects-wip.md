---
template: BlogPost
path: /effective-java-/creating-and-destroying-objects
date: 2021-06-18T01:51:13.536Z
title: "Notes for Effective Java: Creating and Destroying objects [WIP]"
metaDescription: effective java
thumbnail: /assets/java.jpeg
---
## Item 1: Consider static factory methods instead of constructors

### Advantages

* One advantage of static factory methods is that, unlike constructors they have names.
* A second advantage of static factory methods is that, unlike constructors they are not required to create a new object each time they're invoked.
* A third advantage of static factory methods is that, unlike constructors, they can return an object of any subtype of their return type.
* A fourth advantage of static factories is that the class of the returned type can vary from call to call as a function of the input parameters.
* A fifth advantage of static factories is that the class of the returned object need not exist when the class containing the method is written.

### Limitations

* The main limitation of providing only static factory methods is that classes without public or protected constructors cannot be subclassed.
* A second shortcoming of static factory methods is that they are hard for programmers to find.

## Item 2: Consider a builder when faced with many constructor parameters

### Examining alternative object construction methods

* Static factories and constructors do not scale well to large numbers of optional parameters.
* The telescoping works, but it is hard to write client code when there are many constructors, and harder to read it.
* A JavaBean may in an inconsistent state partway through its construction. 
* The java been pattern also precludes the possibility of making a class immutable.

### Benefits of the builder pattern

* The Builder pattern simulates named optional parameters
* The Builder pattern is well suited to class hierarchies
* The Builder pattern is a good choice when designing classes whose constructors or static factories who would more than a handful of parameters



```

	public class NutritionFacts {
		private final int servingSize;
		private final int servings;
		private final int calories;
		private final int fat;
		private final int sodium;
		private final int carbohydrate;

		public static class Builder {
			//Required parameters
			private final int servingSize:
			private final int servings;

			//Optional parameters - initialized to default values
			private int calories		= 0;
			private int fat 			= 0;
			private int carbohydrate 	= 0;
			private int sodium 			= 0;

			public Builder (int servingSize, int servings) {
				this.servingSize = servingSize;
				this.servings = servings;
			}

			public Builder calories (int val) {
				calories = val;
				return this;				
			}

			public Builder fat (int val) {
				fat = val;
				return this;				
			}

			public Builder carbohydrate (int val) {
				carbohydrate = val;
				return this;				
			}

			public Builder sodium (int val) {
				sodium = val;
				return this;				
			}

			public NutritionFacts build(){
				return new NutritionFacts(this);
			}
		}

		private NutritionFacts(Builder builder){
			servingSize		= builder.servingSize;
			servings 		= builder.servings;
			calories		= builder.calories;
			fat 			= builder.fat;
			sodium 			= builder.sodium;
			carbohydrate		= builder.carbohydrate;
		}
	}

```

[](https://github.com/HugoMatilla/Effective-JAVA-Summary#3-enforce-the-singleton-property-with-a-private-constructor-or-an-enum-type)Using the builder



```

	NutritionFacts cocaCola = new NutritionFacts.Builder(240,8).calories(100).sodium(35).carbohydrate(27).build();


```

## Item 3: Enforce the singleton property with a private constructor or an enum type

Different ways of creating singletons

***Public final field***

```

	public class Elvis{
		public static final Elvis INSTANCE = new Elvis();
		private Elvis(){...}
		...
		public void singASong(){...}
	}

```

\
***Singleton with static factory***

```

	public class Elvis{
		private static final Elvis INSTANCE = new Elvis();
		private Elvis(){...}
		public static Elvis getInstance(){ return INSTANCE; }
		...
		public void singASong(){...}
	}

```

***Serialize a singleton***

```

	private Object readResolve(){
		//Return the one true Elvis and let the garbage collector take care of the Elvis impersonator
		return INSTANCE;
	}

```

***Enum Singleton, the preferred approach (JAVA 1.5)***

```

	public enum Elvis(){
		INSTANCE;
		...
		public void singASong(){...}
	}

```

## Item 4: Enforce noninstantiability with a private constructor

* Attempting to enforce noninstantiability by making a class abstract does not work.
* A class can be made noninstantiable by including a private constructor.



```

	public class UtilityClass{
		// Suppress default constructor for noninstantiability
		// (Add comment to clarify why the constructor is expressly provided)
		private UtilityClass(){
			throw new AssertionError();
		}
		...
	}

```

## Item 5: Prefer dependency injection to hardwiring resources

* Static utility classes and singletons are inappropriate for classes whose behaviour is parameterized by an underlying resource.
* Pass the resource into the constructor when creating a new instance.

## Item 6: Avoid creating unnecessary objects

* While String.matches is the easiest way to check if a string matches a regular expression, it’s not suitable for repeated use in performance-critical situations.
* Autoboxing blurs but does not erase the distinction between primitive and boxed primitive types.
* Prefer primitives to boxed primitives, and watch for unintentional autoboxing.

```

	//Slow program. Where is the object creation?
	public static void main (String[] args){
		Long sum = 0L;
		for (long i = 0 ; i<= Integer.MAX_VALUE; i++){
			sum+=i;
		}
		System.out.println(sum);
	}
   // The creation of the Long will slow down the program
```

* Ideally immutable objects that cannot be modified should be the target for reuse

***Object pools are normally bad ideas***

## Item 7: Eliminate obsolete object references

***Can you spot the memory leak?***

```

	public class Stack{
		private Object[] elements;
		private int size = 0;
		private static final int DEFAULT_INITIAL_CAPACITY = 16;

		public Stack(){
			elements = new Object [DEFAULT_INITIAL_CAPACITY];
		}

		public void push(Object e){
			ensureCapacity();
			elements[size++] = e;
		}

		public Object pop(){
			if (size == 0)
				throw new EmptyStackException();
			return elements[--size];
		}

		private void ensureCapacity(){
			if(elements.length == size)
				elements = Array.copyOf(elements, 2 * size + 1);
		}
	}

```

If the stack grows and shrinks the objects popped will not be garbage collected.

* Nulling out object references should be the exception rather than the norm.
* Whenever a class manages its own memory, the programmer should be alert for memory leaks.
* Another common source of memory leaks is caches.
* A common source of memory leaks is a listeners and other callbacks.

## Item 8: Eliminate finalizers and cleaners

* Finalizers are unpredictable, often dangerous, and generally unnecessary.
* Cleaners are less dangerous than finalizers, but still unpredictable, slow, and generally unnecessary.
* Never do anything time-critical in a finalizer or cleaner.
* Never depend on a finalizer or cleaner to update persistent state.
* There is a sever performance penalty for using finalizers and cleaners
* Finalizers have a serious security problem: they open your class up to finalizer attacks.
* Throwing an exception from a constructor should be sufficient to prevent an object from coming into existence; in the presence of finalizers it is not.
* To protect an nonfinal classes from finalizer attacks, write a final finalize method that does nothing.
* Have your class implement AutoClosable.

## Item 9: Prefer try-with-resources to try-finally