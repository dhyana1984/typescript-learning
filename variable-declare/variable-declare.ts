//decunstruct object
const o = { a: "b", b: 1 }
//the type declare is :{ a: string, b: number }
let { a, b }: { a: string, b: number } = o
//or use type
type C = { a: string, b?: number }
function f({ a, b }: C): void {
    //...
}

class P {
    p = 12;
    m() {
    }
}
let c = new P();
let clone = { ...c };
clone.p; // ok
// When spred a instance object, the function of this instance object will miss
// clone.m(); // error!