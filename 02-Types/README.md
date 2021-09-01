# Types

Typescript has the same types as Javascript has built-in:
- string
- number
- boolean
- null
- undefined
- object
- Symbol

We can assign types with colon in Typescript: `let num: number`. When we assign a value to a variable Typescript is capable to determine the type with the type inference: `let num = 1 //num is type number`.

> It's not considerate a good practice to explicitly say the type of a variable **if it's initialized**. Like this `const num: number = 1`. It's redondant!

```
let num1 = 1                    // type number
const num2 = 5                  // type number of value 5 because it's a constant
let string = 'text'             // type string
let arr = ['hello', 'world']    // type string[]
```

## Objects

For an object we can specify the type like this: 
``` 
const obj: { 
    firstname: string, 
    lastname: string, 
    age: number 
} = {
    fisrtname: 'test',
    lastname: 'test',
    age: 32
}
```

## Any

The type *any* allows to define a variable wich can be of any type. The variable will be able to be of type string, number, object, ...
This is basically a wildcard and at the end it's like javascript without any type.

> It's better to avoid to use *any*. It takes away all benefits to use Typescript for type checking. It should be preferable to use an Union type.

## Tuple

We can create tuples with Typescript. It's gonna be a fixed array with excat amount and type of elements. It's a case where we need to specify the type because the infered type by Typescript will be wrong (an array of strings OR numbers).
```
let tuple = [number, string] = [2, 'author];
tuple[0] = 'test'               // will throw an error
tuple[0] = [1, 'test', 'test']  // will throw an error
tuple.push('admin')             // will be allowed though
```

## Enums

Enums will be a list of key value pair.
```
enum Role {
    ADMIN,  // = 0
    AUTHOR, // = 1
    WRITTER // = 2
}

const person = {
    firstname: 'test',
    role: Role.ADMIN
}
```

Enums don't need to start at 0. They can start at any number or even have a string for value.
```
enum Role {
    ADMIN = 'ADMIN',
    AUTHOR = 150,
    WRITTER = 200,
}
```

## Union Type

Union type is used to define a variable that can have 2 or several types.
```
let myVar: string | number;
myVar = 2;          // will work
myVar = 'text';     // will work
myVar = ['text'];   // will NOT work
```

## Literal Type

It's like the constant where the type infered is the value itself. We can assign a type to a variable and this variable should be equal to a specific value:
```
// argument of type string but just not any string
function outputRole(role: 'admin' | 'author') {
    return role;
}

outputRole('admin');     // admin
outputRole('author');    // author
outputRole('adm');       // will throw an error
```

## Type Alias

It a custom type that can be used anywhere. It's an alternative to classes.
```
type Combinable = string | number;
let myVar: Combinable;

type Role = 'admin' | 'author';
let role: Role;
```

## Functions

Functions have another important type: the return type. As variables, it's better to let Typescript infer the return type.

```
// Return type infered to number
function add(n1: number, n2: number) {
    return n1 + n2;
}

// Or specify the return type
function concat(text1: string, text2: string): string {
    return text1 + text2;
}
```

*void* can be used if the function doesn't return anything
```
function returnNothing() : void {}
```

## Functions as Types

If we assign a function to a variable, Typescript is not capable to infer the type of the variable. It'a rare case where we need to specify the type to avoid the variable to be reassigned with a value that is not a function.
```
function add(n1: number, n2: number) {
    return n1 + n2;
}

let myFunc = add;                               // any
myFunc: Function = add;                         // better but still any Function   
myFunc: (a: number, b: number) => number = add; // better
myFunc();
```

With callbacks
```
function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    var result = n1 + n2;
    cb(result);
}

addAndHandle(1, 2, (result) => {
    console.log(result);
})
```
> The only thing that Typescript will not pick up is the return type for the callback. We could return something in the callback and Typescript will not complain.

## Unknown type

*unknown* is different to *any* even if it can be confused with it. It's more restrective than *any*. We cannot assign another type to an unknown variable. We have to add a check for that:
```
let userInput: unknown;
let userName: string = 'Test';
userName = userInput;           // Cannot assign unknow to string

if (typeof userInput === 'string') {
    userName = userInput;       // Allowed!
}
```

> If we cannot detrmine in advance wich type is a variable, it's better to use *unknown* than *any*. At least we handle case where we want to do something with certain types.

## Never type

*never* can be used if a function never return a value, nor undefined, nor null, nor nothing, because, for example, it throws an error. The type infered by the return type of the function below will be *void*, but it will be clearer to specify that it will never return nothing.

```
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generate('An error occured!, 500);
```