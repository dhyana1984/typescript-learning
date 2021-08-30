
interface Animal1 {
    live(): void
}
interface Dog extends Animal1 {
    woof(): void
}
// type Example1 = number
type Example1 = Dog extends Animal1 ? number : string
// type Example2 = string
type Example2 = RegExp extends Animal1 ? number : string

interface IdLable {
    id: number
}
interface NameLabel {
    name: string
}

/* 
 * the problem of overload
 * 1. cumbersome when the overload is too many
 * 2. when add a new type, the overload will gorw exponentially
 * 
 * Resolve: use conditional type
 */
function createLabel(id: number): IdLable
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLable | NameLabel
function createLabel(nameOrId: string | number): IdLable | NameLabel {
    throw "unimplemented"
}

// conditional type
type NameOrId<T extends number | string> = T extends number ? IdLable : NameLabel

// use this conditional type to simplify overloads
function createLabel1<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented"
}

// type stringLabel: NameLabel
const stringLabel = createLabel1("typescript")
// type numberLabel: IdLabel
const numberLabel = createLabel1(2.8)
// type mixedLabel: NameLabel | IdLabel
const mixedLabel = createLabel1(Math.random() ? "hello" : 42)


// type MessageOf<T> = T["message"] // error, we don't know if "message" is property of T

// T extends { message: unknown } is the constraint of generic
type MessageOf<T extends { message: unknown }> = T["message"] // correct
interface Email {
    message: string
}

// type EmaleMessageContents =  MessageOf<Email>, Email has message property
type EmaleMessageContents = MessageOf<Email>


type MessageOf1<T> = T extends { message: unknown } ? T["message"] : never
interface Email {
    message: string
}
interface Dog {
    bark(): void
}
// type EmaleMessageContents1 = string
type EmaleMessageContents1 = MessageOf1<Email>

// type DogMessageContents = never
type DogMessageContents = MessageOf1<Dog>

type Flattern<T> = T extends any[] ? T[number] : T

// type str = string, extract the element type
type Str = Flattern<string[]>

// type Num = number, leaves the type alone
type Num = Flattern<number>



type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never

// type Num2 = number
type Num2 = GetReturnType<() => number>

// type Str2 = string
type Str2 = GetReturnType<(x: string) => string>

//type Bools = boolean[]
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>


type ToArray<Type> = Type extends any ? Type[] : never

// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never

// type StrArrOrNumArr1 = (string | number)[]
type StrArrOrNumArr1 = ToArrayNonDist<string | number>