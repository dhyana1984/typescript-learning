/*
 * Generic function 
 */
//generic, the type will not miss
const identity = <T>(arg: T): T => {
    console.log(arg)
    return arg
}

const output1 = identity<string>("myString")
//type inference
const output2 = identity("myString")

const loggingIdentity = <T>(arg: T[]): T[] => {
    console.log(arg.length)
    return arg
}

const output3 = loggingIdentity("myString")

interface GenericIdentityFn<T> {
    (arg: T): T
}

const identity1 = <T>(arg: T): T => {
    return arg
}

const myIdentity: GenericIdentityFn<number> = identity
myIdentity(1) //correct
// myIdentity('1') // error


/*
 * Generic class 
 * static property cannot use generic type
 */
class GenericNumber<T>{
    zeroValue: T
    add: (x: T, y: T) => T
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = (x, y) => x + y


/*
 * generic type constraint
 */

interface Lengthwise {
    length: number
}

const loggingIdentityWithConstraint = <T extends Lengthwise>(arg: T): T => {
    console.log(arg.length)
    return arg
}

const loggingIdentityWithoutConstraint = <T>(arg: T): T => {
    console.log(arg.length) //error
    return arg
}
loggingIdentityWithConstraint("abcde") //5
loggingIdentityWithoutConstraint("abcde")

/**
 * the type argument in generic constraint
 */

// To define a generic object
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let obj = { a: 1, b: 2, c: 3, d: 4 };

const property1 = getProperty(obj, "d"); // okay
const property2 = getProperty(obj, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

console.log(property1)
console.log(property2)

