---
template: BlogPost
path: /effective-java-chapter-4
date: 2021-06-20T11:42:56.302Z
title: "Effective Java: Classes and Interfaces [WIP]"
metaDescription: Effective Java
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

\
or

```
private static final Thing[] PRIVATE_VALUES ={...}
public static final Thing[] values(){
    return PRIVATE_VALUES.clone;
}
```