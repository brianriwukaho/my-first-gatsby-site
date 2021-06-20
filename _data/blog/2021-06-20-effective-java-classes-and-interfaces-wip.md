---
template: BlogPost
path: /effective-java-chapter-4
date: 2021-06-20T11:42:56.302Z
title: "Effective Java: Classes and Interfaces [WIP]"
metaDescription: Effective Java
thumbnail: /assets/java.jpeg
---
## Item 15: Minimize the accessibility of classes and members

* A well-designed component seperate its API from its implementation
* The rule of thumb is to make each class or member as inaccessible as possible
* Information hiding decouples components allowed them to be developed, tested, and used in isolation
* Instance fields of public classes should rarely public
* Classes with public mutable fields are not generally thread-safe
* Static final fields should contain primitive values or references to immutable objects
* A final field containing a reference to a mutable object has all the disadvantages of a non-final field
* A non-zero length array is always mutable

```
// Potential security hole!
public static final Thing[] VALUES = { ... };
```

Solutions

```
private static final Thing[] PRIVATE_VALUES ={...}
public static final List<Thing> VALUES = Collections.unmodifiableList(Arrays.asList(PRIVATE_VALUES));
```

or

```
private static final Thing[] PRIVATE_VALUES ={...}
public static final Thing[] values(){
    return PRIVATE_VALUES.clone;
}
```

## Item 16: In public classes, use accessor methods, not public fields

Degenerate classes should not be public

```
	class Point {
		public double x;
		public double y;
	}
```

* They don't benefit from *encapsulation*
* Can't change representation without changing the API.
* Can't enforce invariants.
* Can't take auxiliary actions when a field is accessed.

Replace them with *accessor methods* (getters) and *mutators* (setters).

```

	class Point {
		private double x;
		private double y;

		public Point(double x, double y){
			this.x = x;
			this.y = y;
		}

		public double getX() { return x; }
		public double getY() { return y; }

		public void setX(double x) { this.x = x; }
		public void setY(double y) { this.y = y; }
	}

```

* If a class is accessed **outside its package**, provide **accessor methods**.
* If a class is **package-private or is a private nested class**, its **ok to expose** its data fields.
* In **public classes** it is a questionable option to **expose immutable fields**.

## Item 17: Minimize mutability

All the information of the instance is provided when it is created. They are easier to design, implement and use. And they are less prone to errors and more secure

* Don't provide any methods that modify the object's state (no mutators)
* Ensure that the class can't be extended
* Make all fields final
* Make all fields private
* Ensure exclusive access to any mutable component

```

	public final class Complex {
		private final double re;
		private final double im;

		public Complex (double re, double im) {
			this.re = re;
			this.im = im;
		}

		// Accessors with no corresponding mutators
		public double realPart() { return re;}
		public double imaginaryPart() { return im;}

		public Complex add(Complex c){
			return new Complex(re + c.re, im + c.im);
		}

		public Complex subtract(Complex c){
			return new Complex(re - c.re, im - c.im);
		}

		...

		@Override public boolean equals (Object o){...}
	}


```

* The arithmetic operation **create and return a new instance**. (Functional approach)
* Immutable objects are simple. They only have one state for their lifetime.
* Synchronization is not required. They can be shared freely and can reuse existing instances.

```

	public static final Complex ZERO = new Complex(0,0)
	public static final Complex ONE = new Complex(1,0)
	public static final Complex I = new Complex(0,1)

```

* Using static factories can create constants of frequently requested instances and serve them in future requests.
* Internals of the immutable objects can also be shared.
* They make great building blocks for other objects.
* The disadvantage is that a separate object is required for distinct values. In some cases it could create a performance problem.

**How to deny subclassing in immutable objects**

1. Making it final
2. Make all of its constructors private or package-private and add a public static factory

```
	public class Complex {
		private final double re;
		private final double im;

		private Complex (double re, double im){
			this.re = re;
			this.im = im;
		}

		public static Complex valueOf(double re, double im){
			return new Complex(re,im);
		}

		...
	}
```

This technique allows flexibility of multiple implementations, it's possible to tune the performance and permit to create more factories with names that clarify its function.[](https://github.com/HugoMatilla/Effective-JAVA-Summary#15-minimize-mutability)

### Summary

* Classes should be immutable unless there is a very good reason to make them mutable
* If a class cannot be made immutable, limit it's mutablility as much as possible
* The natural inclination should be to declare every field **private final** unless there is a good reason to do otherwise
* Constructors should create fully initialized objects with all of their invariants established

## Item 18: Favour composition over inheritance