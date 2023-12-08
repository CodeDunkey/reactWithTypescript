interface TestPerson_1 {
    name: string
    middle_name: string | null
    age: number
    alive: boolean
    addresses: {
        somewhere1: string,
        somewhere2: string,
        somewhere3: string
    }
    cars: string[]
}
let testPerson_1: TestPerson_1 = {
    name: "John",
    middle_name: null,
    age: 100,
    alive: true,
    addresses: { somewhere1: "here", somewhere2: "there", somewhere3: "everywhere" },
    cars: ["Ford", "Skoda", "VW"]
}


interface TestPerson_2 {
    employee_name: string
    employee_id: number
    employement_date: string
    still_employed: boolean
     
    addresses: {
        somewhere1: string,
        somewhere2?: string,
        somewhere3?: string
    }
    projects: string[]
    // function: insæt function her.
}
let testPerson_2: TestPerson_2 = {
    employee_name: "Bob",
    employee_id: 1243568790,
    employement_date: "20-02-2020",
    still_employed: true,
     
    addresses: {
        somewhere1: "Working booth", 
    },
    projects: ["Project-1", "Project-a", "Project-#"]
}

type Choose_A_Person = TestPerson_1 | TestPerson_2;

const isPerson_1 = (parameter: Choose_A_Person): parameter is TestPerson_1 =>{
    // console.log("parameter as TestPerson_1", parameter as TestPerson_1)
    return ((parameter as TestPerson_1).age !== undefined)
} 
// console.log("isPerson_1(testPerson_2)", isPerson_1(testPerson_2))
const isPerson_2 = (parameter: Choose_A_Person): parameter is TestPerson_2 =>{
    return ((parameter as TestPerson_2).employee_id !== undefined)
}


function showPerson (param: Choose_A_Person){
    // console.log(param)
    if(isPerson_1(param))console.log(param.addresses)
    if(isPerson_2(param))console.log(param.addresses)
}
showPerson(testPerson_2);
export default function Animal(){
   
        
    
}

