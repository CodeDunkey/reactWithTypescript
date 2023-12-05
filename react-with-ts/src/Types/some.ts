interface Person {
    name: string
    age: number
}

let myPerson: Person = {name: "Human", age: 1000}

interface Car {
    name: string
    model: string
}

let myCar: Car= {name: "Ford", model: "T"};
type MyObject = Person | Car;


console.log();

const isCar = (something: MyObject): something is Car => {
    if((something as Car).model !== undefined)return true 
    return false
}

const isPerson = (something: MyObject): something is Person => {
    if((something as Person).age !== undefined)return true 
    return false
}

export default function MyFunction(para: MyObject){
    if(isCar(para))console.log(para.model)
    if(isPerson(para))console.log(para.age)
}

MyFunction(myPerson);