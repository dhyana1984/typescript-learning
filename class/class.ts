class AnimalClass {
    name: string
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`)
    }
}

class Snake extends AnimalClass {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse extends AnimalClass {
    constructor(name: string) {
        super(name)
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}

let sam = new Snake("Sammy the Python")
let tom: AnimalClass = new Horse("Tommy the Palomino")
sam.move()
tom.move(34)


class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; } //Person constructor is protected
}

// We can extends Person even if it's protected
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // Error, we cannot new Person as is't protected


class Octopus {
    readonly numberOfLegs: number = 8
    // if we add readonly here, the parameter will be declare as a variable
    // also we could use private, protect, public
    constructor(readonly name: string) {
    }

    print() {
        console.log(this.name)
    }
}