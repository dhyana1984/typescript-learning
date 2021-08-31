type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse
}

const confirms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
}

type OptionsFlags<T> = {
    [Property in keyof T]: boolean
}

type FeatureFlags = {
    darkMode: () => void
    newUserProfile: () => void
}

//type FeatureOptions = {darkMode: boolean; newUserProfile:boolean}
type FeatureOptions = OptionsFlags<FeatureFlags>


/*
 * remove the readonly modifier from CreateMutable type's properties
 */
type CreateMutable<T> = {
    -readonly [P in keyof T]: T[P]
}

type LockedAccount = {
    readonly id: string
    readonly name: string
}

// type UnlockedAccount = {
//     id: string;
//     name: string;
// } the readonly is removed
type UnlockedAccount = CreateMutable<LockedAccount>

/*
 * remove the optional modifier from CreateMutable type's properties
 */
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

// type User = {
//     id: string;
//     name: string;
//     age: number;
// } the optional attributes removed
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
}


/*
 * Key Remapping via as 
 */
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    names: string;
    age: number;
    location: string;
}

//type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// } add get on these properties
type LazyPerson = Getters<Person>;


/* 
 * Remove the 'kind' property
*/
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

// type KindlessCircle = {
//     radius: number;
// } kind removed
type KindlessCircle = RemoveKindField<Circle>;



type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};

//type ObjectsNeedingGDPRDeletion = {
//     id: false;
//     name: true;
// }
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;