type PersonType = { age: number, name: string, alive: boolean }
type Age = PersonType["name"] // type age = string

type I1 = PersonType["name" | "age"] // type I1 = string | number
type I2 = PersonType[keyof PersonType] // type I2 = string | number | boolean

type AliveOrName = "alive" | "name"
type I3 = PersonType[AliveOrName] // type I3 = string | boolean

// type I4 = PersonType["aaa"] // error

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]

type PersonType1 = typeof MyArray[number] // type PersonType1 = {name:string, age:number}, refer a element of MyArray
type Age1 = typeof MyArray[number]["age"] // type Age = number
type Age2 = PersonType1["age"] // type Age2 = number

//only use types when indexing

const key = "age"
// type Age3 = PersonType1[key] //error

type key1 = "age"
type Age4 = PersonType1[key1] //correct