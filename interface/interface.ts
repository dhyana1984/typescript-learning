
interface LabelledValue {
    label: string
}

const printLabel = (labelledObj: LabelledValue) => console.log(labelledObj.label)
const myObj = { size: 10, label: "Size 10 Object" }
printLabel(myObj)   // "Size 10 Object"

/*
 * option bags 
 */
interface SqureConfig {
    color?: string //option property name
    width?: number
}

const createSqure = (config: SqureConfig): { color: string, area: number } => {
    let newSqure = { color: "white", area: 100 }
    if (config.color) {
        newSqure.color = config.color
    }
    if (config.width) {
        newSqure.area = config.width * config.width
    }
    return newSqure
}
const mySqure = createSqure({ color: "black" })

//error, because colour cannot pass extra property check
// const mySqure1 = createSqure({ colour: "red", width: 100 }) 

// to pass extra property check, we should use as to assert
const mySqure2 = createSqure({ width: 100, opacity: 0.5 } as SqureConfig)

//also, we could use a string index singnature
interface SqureConfig1 {
    color?: string //option property name
    width?: number,
    //means SqureConfig1 could have any property with any type once they are not color or width
    [propName: string]: any
}

//The last method to skip extra property check is to define a variable
const squreOptions = { colour: "red", width: 100 }
const mySqure3 = createSqure(squreOptions) // correct, skip the extra property check

/*
 * readonly property 
 * readonly key word is using in prooerty, const key word is using in variable
 */
interface Point {
    //add readonly
    readonly x: number
    readonly y: number
}

const p1: Point = { x: 10, y: 20 }
// p1.x = 5 //error as x is readonly

//
let array: number[] = [1, 2, 3, 4]
let roArray: ReadonlyArray<number> = array
// roArray[0] = 12; // error!
// roArray.push(5); // error!
// roArray.length = 100; // error!

// we cannot even assign a ReadonlyArray to a normal array
// a = ro; // error!

//but we can use as assert
array = roArray as number[]
array[0] = 1 // we could assign value to array

/*
 * use interface to define function type 
 */
interface SearchFunc {
    (source: string, subString: string): boolean
}
const mySearch: SearchFunc = (source: string, subString: string) => {
    const result = source.search(subString)
    return result > -1
}

//the arguments name no need to be the same as interface, also no need to declare the type
const mySearch1: SearchFunc = (src, sub) => {
    const result = src.search(sub)
    return result > -1
}

/*
 * index 
 */
interface StringArray {
    //index is number, index return vaue is string
    [index: number]: string
}

const myArray: StringArray = ["bob", "John"]

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error, the number index return value should be sub type of string index return value
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: string       // error, name should be number
}

// we could set the index singnature as readonly, the we cannot assign value to index
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!

/*
 * class type 
 */

interface ClockInterface {
    currentTime: Date
    setTime(d: Date): any
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) {

    }
}