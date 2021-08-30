/*
 * TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property
 */

const s = "hello"
let n: typeof s

//unknow is safer than any, unknow is everything's parenttype, any is everything's subtype and parenttype
// so when use unknow, we still need assert
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate> //typeof k = boolean

function f() {
    return { x: 10, y: 3 }
}
// type PP = ReturnType<f> //error, f is a value but not a type, value and type is not the same
type PP = ReturnType<typeof f> // correct, typeof PP = {x:number, y :number}