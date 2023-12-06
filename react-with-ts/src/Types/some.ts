interface Person {
    name: string
    age: number
}

let myPerson: Person = {name: "Human", age: 1000}

interface Car {
    name: string
    model: string
}

let myCar: Car = {name: "Ford", model: "T"};
type MyObject = Person | Car;


type Unknown1 = unknown;
let unknown1: Unknown1 = "abc";
unknown1 = true;

console.log("unknown1", unknown1);

const isCar = (something: MyObject): something is Car => {
    if((something as Car).model !== undefined)return true 
    return false
}

const isPerson = (something: MyObject): something is Person => {
    if((something as Person).age !== undefined)return true 
    return false
}

function Check1(para: MyObject){
    if(isCar(para))console.log(para.model)
    if(isPerson(para))console.log(para.age)
}

export default function MyFunction(){
    Check1(myCar);    
}
