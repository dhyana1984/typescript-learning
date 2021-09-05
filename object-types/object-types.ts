/*
 * Index Signatures 
 */

interface StringArray {
    [index: number]: string
}
const getStringArray = (): StringArray => {
    return ['a', 'b', 'c']
}
const myArray1: StringArray = getStringArray()

/*
 * interface could extend interface 
 */

interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
    unit: string;
}

interface AddressWithUnit1 extends BasicAddress {
    unit: string;
}

/*
 *  Intersection Types
 */

interface Colorful {
    color: string
}
interface CircleP {
    radius: number
}
//intersected Colorful and CircleP to produce a new type that has all the members of Colorful and CircleP
type ColorfulCircle = Colorful & CircleP

const draw = (circle: Colorful & CircleP) => {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'red', radius: 20 })

const draw1 = (circle: Colorful | CircleP) => {
    console.log(`Color was ${(<Colorful>circle).color}`);
    console.log(`Radius was ${(<CircleP>circle).radius}`);
}

draw1({ color: 'red', radius: 20 })