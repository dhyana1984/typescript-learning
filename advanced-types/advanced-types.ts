/*
 * intersection type
 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person2 {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person2("Jim"), new ConsoleLogger());
var nn = jim.name;
jim.log();

/*
 * union types 
 */

function padLeft(value: string, padding: any) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'`)
}

// use uniton type
function padLeft1(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'`)
}

interface Bird {
    fly(): void
    layEggs(): void
}

interface Fish {
    swim(): void
    layEggs(): void
}

function getSmallPet(): Fish | Bird {
    return {
        fly: () => { },
        layEggs: () => { },
        swim: () => { }
    }
}

let pet = getSmallPet();
pet.layEggs(); // okay, layEggs exists in both of Bird and Fish
// pet.swim();    // errors, because we can only visit the common member of union type

// but we can use asset to convert the type
(<Fish>pet).swim()

// we can create a type guard function
const isFish = (pet: Fish | Bird): pet is Fish => !!(<Fish>pet)?.swim
// then use this function
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}


/**
 * remove null and undefined
 */
function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}


console.log(fixed("test"))
console.log(fixed(null))

/*
 * type alias 
 */

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

//BT
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

//LinkedList
type LinkedList<T> = T & { next: LinkedList<T> };

// type Yikes = Array<Yikes>; // error
// type PList extend LinkedList<T> // error, type could not be extended or implement

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

// type alias didn't create new name
type Alias = { num: number }
//interface create new name
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface

/*
 * Discriminated Unions 
 */

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

interface Triangle {
    kind: "triangle";
    bottomWidth: number;
    height: number;
}
type Shape1 = Square | Rectangle | Circle | Triangle;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function area(s: Shape1) {
    switch (s.kind) { // kind is the Discriminated property, we use switch case on this property to execute different logic
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s) // error, checked that Triangle is not "never"
    }
}

const theTriangle: Shape1 = { bottomWidth: 1, height: 2, kind: "triangle" }
const theSqure: Shape1 = { size: 2, kind: 'square' }
console.log(area(theSqure)) // 4
console.log(area(theTriangle))//error


/*
 * index type 
 */

//keyof T could be instead of "name1" | "age"
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface IPerson {
    name1: string;
    age: number;
}
let person: IPerson = {
    name1: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name1']); // ok, string[]

interface Map1<T> {
    [key: string]: T;
}
let keys: keyof Map1<number>; // string
let value: Map1<number>['foo']; // number