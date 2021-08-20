//bool
let isDone: boolean = false

//number
let decliteral: number = 6

//string
let firstname: string = "bob"

//array
let list1: number[] = [1, 2, 3]

//generic array 
let list2: Array<number> = [1, 2, 3]

//tuple
let x: [string, number] = ["hello", 10]

//enum
enum Color { Red = 5, Green, Blue = 2 }
let blue: Color = Color.Blue
let red: Color = Color.Red
let colorName: string = Color[6]
console.log(blue)  //2
console.log(red)  //5
console.log(colorName) //Green

//any
let notSure: any = 4
notSure = "maybe a string instrad"
notSure = false

// We can use some functions that the variable may have those functions
// notSure.ifItExists() //OK, ifItExists might exist at runtime
// notSure.toFixed()    //OK, toFixed exists (but the compiler doesn't check)

// We cannot use Object instead of any because we cannot call functions that not exists in Object instance type
let prettySure: Object = 4
// prettySure.toFixed() //Error, Property 'toFixed' doesn't exist on type 'Object'

//also, we can use any to define a array
let list3: any[] = [1, true, "free"]
list3[1] = 100


//void
// void means no anything
function warnUser(): void {
    console.log("this is a warn message")
}
//is use void as variable type, only undefined and null could be assigned
const unusable: void = undefined

//null and undefined
//usually null and undefined is the sub type for all type
//we can assign undefined or null to number type
// let number1: number = undefined
// number1 = null

//but if we use --strictNullChecks, null and undefined only could be assigned to avoid type

//never
//never means those type who never exists value like a function which throw a exception
const error = (message: string): never => {
    throw new Error(message)
}

//the return value is never
const fail = (): void => error("something failed")

//the function who return never must don't have the end
const infiniteLoop = (): never => {
    while (true) { }
}


//type assert
//type assert is like the type convert

// use <string> to assert type
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length

//use as to assert type. When using JSX, only as is allowed
let anotherValue: any = "this is a string"
strLength = (anotherValue as string).length