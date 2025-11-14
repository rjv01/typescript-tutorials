const score:Array<number> = [];
const names:Array<string> = [];

function one(val :number | boolean) :number|boolean {
    return val;
}

function two(val :any) :any {
    return val;
}

function three<Type>(val: Type):Type {
    return val;
}

one(1);
two("2");
three(3);
three("4");

interface Bottle{
    brand:string,
    liter:number
}

// to create a function tpye as bottle we need to use Generic Type or T for short
// function four<Bottle>(val: Bottle) :Bottle{
//     return val;
// }

// four("gym",1);

function four<Bottle>(val: Bottle) :Bottle{
    return val;
}

four(1);
