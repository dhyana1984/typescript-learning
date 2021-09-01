interface Named {
    name2: string;
}

class Person1 {
    name2: string;
}

let p: Named;
// OK, because of structural typing, both of the class and interface have "name2"
p = new Person1()

/*
 * The concept of TypeScript type compatibility is that if x is compatible with y
 * x need have the same properties as y
 */

let xx = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = xx; // OK, because y has the same type of argument as xx
// x = y; // Error


interface Empty<T> {
}
let emptyNumber: Empty<number>;
let emptyString: Empty<string>;

emptyNumber = emptyString  // OK, because emptyString matches structure of emptyNumber

interface NotEmpty<T> {
    data: T
}
let notEmptyNumber: NotEmpty<number>;
let notEmptyString: NotEmpty<string>;

// notEmptyNumber = notEmptyString  // Error, because x and y are not compatible

