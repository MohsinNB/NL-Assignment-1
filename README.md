# Uses of keyof keyword in TypeScript

Welcome, In this blog I will write what is the uses of Keyof keyword in TypeScript. When you declare a type in typeScript you should define what will be included in this type. Like an Example:

type User = {
name: string;
age: number;
};

If you want to get a Union type of the keys of Type User, you can use Keyof.

# Example

type UserKeys = keyof User;

# Explaination

It produces a union type of the keys: "name" | "age"
Now UserKeys is a type that can only be "name" or "age"

Now you can use UserKeys as a type. And it consider "name" or "age"

# Example Usage

const key: UserKeys = "name"
const key: UserKeys = "age"

<!-- Blog 2 -->

# Example of using union and intersection types in TypeScript

Welcome to my new blog. Today, I'll explain what are Union and Intersection as well as providing Example

# Union (|)

Sometimes we actually don't know which type of value would be provided. So, we define variable type with '|' .
It's call the union type. It defines that, You can use Either left side of '|' or right side as a variable property.

# Let's see an Example

let value: number | string;

value = 42; // number is allowed
value = "hello"; // string is allowed
value = true; // Error: boolean not allowed

In this occasion, you can set the Value of value variable is number or string. Either number or string. you can't use the boolean as a value. It's called Union

# Intersection (&)

Intersection is basically the sign (&). It used for combine two types into a another different type

# Example

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const user: Person = {
name: "Mohsin",
age: 22
}; // Must have both name and age
