enum Diredciton {
    Up = 1,
    Down,
    Left,
    Right
}

enum ResponseEnum {
    No = 0,
    Yes = 1,
}

const respond = (recipient: string, message: ResponseEnum): void => {
    //...
}

// use enum
respond("the value", ResponseEnum.Yes)

const getValue = (a: number) => a
enum E {
    P = 2, // correct
    A = getValue(1)
    B, //error, need initializer
}

/*
 * string enum 
 * without increment
 */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

/*
 * constant enum member 
 */
enum FileAccess {
    // constant enum value
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    Special = 1 + 1,
    // computed enum value
    G = "123".length,
    // error
    // N = NaN,
    // I = Infinity
}

/*
 * reverse mapping, only works in number enum
 */
enum A {
    A = 'a',
    B = 2
}
const aa = A.A
const bb = A.B
const nameOfA = A[aa] //error, only works in number enum
const nameOfB = A[bb] //B
console.log(nameOfA)
console.log(nameOfB)

/*
 * constant enum
 * const enum will be delete when compile, and computed is not allowed 
 */

const enum ConstEmum {
    A = 1,
    b = A * 2
}

/*
 * declare enum 
 * the member withou initializer need compute
*/

declare enum DeclareEnum {
    A = 1,
    B,
    C = 2
}

const declareEnum = DeclareEnum.B
console.log(declareEnum) //error, DeclareEnum.B is not a computed member