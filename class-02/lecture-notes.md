# Class 02 Lecture Notes

## Data types in JavaScript

- a way of labeling and organizing data
- a way format our data so our program can use it properly

JavaScript is a **loosely typed** and **dynamic** language

- that we don't have to know the type of data to declare a variable
- variables do not need to be declared with a type

`let dog;`

- dynamic - I can change the type of data after the variable has been declared

`dog = 'woof';`
`dog = 4;`
`dog = false;`

## Types

### Strings

- a sequences of characters used to respent text. Written with single quotes.
  - `hello`
  - `oefi3j2f34324r2`

### Number

- numeric data type
  - full numbers, negatives, decimals

### Booleans

- Logical types
  - `true`
  - `false`

### Undefined

- it has not been defined yet
  - `let dog;`

### Null

- something that has been defined as none
  - `let dog = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false
