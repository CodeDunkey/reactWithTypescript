interface Person {
    name: string
    age: number
    height: number
}

let myPerson: Person = { name: "Human", age: 1000, height: 200 }

interface Car {
    name: string
    model: string
}

let myCar: Car = { name: "Ford", model: "T" };

type MyObject = Person | Car;

interface Component {
    description: string
}
// if (myPerson){
//     console.log("myPerson")
// }

// brug 'in' keyword
 
let testParameter: string = "working";
const TestFunction = (para = testParameter): string => // with a return type 
{ return para}

// console.log(TestFunction());

// using boolean instead of "parameter 'is' union_type", then the 
// values of Car can not be individually selected with '.' as in line 46
const isCar = (something: MyObject): boolean => {
    if ((something as Car).model !== undefined)return true
    return false
}

const isPerson = (something: MyObject): something is Person => {
    if ((something as Person) !== undefined) return true
    return false
    // få fjernet "if" og true/false, så der kun er én return.
}

function Check1(para: MyObject){
    if(isCar(para))console.log(para)
    if(isPerson(para))console.log(para.height)
}

export default function MyFunction(){
    // Check1(myCar)
    // Check1(myPerson)
}
