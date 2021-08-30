class Rhino extends Animal { }
class Elephant extends Animal { }
class Snakes extends Animal { }

// type zoo = [Rhino| Elephant | Snakes]
// cannot inference the Animal type
let zoo = [new Rhino(), new Elephant(), new Snakes()]

// type zoo1 = Animal[]
let zoo1: Animal[] = [new Rhino(), new Elephant(), new Snakes()]



