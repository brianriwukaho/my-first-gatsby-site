---
template: BlogPost
path: /effective-java/methods-common-to-all-objects
date: 2021-06-18T05:24:58.932Z
title: "Notes for Effective Java: Methods common to all objects [WIP]"
metaDescription: effective-java
thumbnail: /assets/java.jpeg
---
## Item 10: Obey the general contract when override equals

**You do not have to do this if:**

* Each instance of the class is inherently unique
* There is no need fo the class to provide a logical equality test
* A superclass has already overridden equals, and the superclass behaviour is appropriate for this class

**Override if:**

when a class has a notion of logical equality that differs from mere object identity and a superclass has not already overridden equals. This is generally the case for value classes.

* The class is private or package-private and you are certain that its equals method will never be invoked
* Once the equals contract has been violated for an object. it is uncertain how other objects will behave when confronted with the object.
* There is no way to extend an instantiable class and add a value component while preserving the equals contract.
* Do not write an equals method that depends on an unreliable resource.

**Here is the recipe for a high-quality equals method:**

1. Use the == operator to check if the argument is a reference to this object
2. Use the instanceof operator to check if the argument has the correct type
3. Cast the argument to the correct type
4. For each "significant" field in the class, check if that field of the argument matches the corresponding field of this object.

When finished writing your equals method, ask yourself these three questions: Is it symmetric? Is is transitive? Is it consistent?

**Caveats:**

* Always override hashcode when you override equals
* Don't substitute another type for Object in the equals declaration

## Item 11: Always override hashCode when you override equals

You must override hasCode in every class that override equals. Equal objects must have equal hash codes.

**The contract**

* When the hashCode method is invoked on the same object it must return the same value
* Calling hashCode on the two equal objects must produce the same integer
* If two objects are not equal it is not required that calling hashCode on each of the objects must produce distinct results.

  * Producing distinct results of unequal objects may improve the performance of hashtables

**A simple recipe:**

1. Declare an int variable named result
2. For each field??*f*??used in??*equals*??do:

   * Compute??*c*

     * boolean:??*(f ? 1 : 0)*
     * byte, char, short or int:??*(int) f*
     * long:??*(int) (f ^ (.f >>> 32))*
     * float:??*Float.floatToIntBits(f)*
     * double:??*Double.doubleToLongBits(f)*??and compute as a long
     * object reference: if??*equals*??of the reference use recutsivity, use recursivity for the??*hashCode*
     * array: each element as a separate field.
   * Combine:??*result = 31 * result + c*
3. Return *result*

* Do not be tempted to exclude significant fields from the hashcode computation to improve performance.
* Don't provide a detailed specification for the value returned by hashCode, so clients can't reasonably depend on it; this gives you the flexibility to change it.

## Item 12: Always override toString

* Providing a good toString implementation makes your class much more pleasant to use and makes systems using the class easier to debug.
* When practical, the toString method should return all of the interesting information contained in the object.
* Whether or not you decide to specify the format, you should clearly document your intentions.
* Provide programmatic access to the information contained in the value returned by toString.

## Item 13: Override clone judiciously

* A class implementing Cloneable is expected to provide a provide a properly functioning public clone method.
* Immutable classes should never provide a clone method.
* The clone method functions as a constructor; you must ensure that it does no harm to the original object and that it properly establishes invariants on the clone.
* The Cloneable architecture is incompatible with normal use of final fields referring to mutable objects.
* Public clone methods should emit the throws clause.
* A better approach to object copying is to provide a copy constructor or copy factory.

## Item 14: Consider implementing Comparable

Use of the relational operators < and > in compareTo methods is verbose and error-prone and no longer recommended.