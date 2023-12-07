import transactions from './transactionList.json'
import test from './TestJSON.json'
import { assert } from 'console'
import { json } from 'stream/consumers';

// console.log("from import", transactions);


// const transaction1 = `"'"+${transactions}`; 
// console.log("as string interpolation:", transaction1);


// const transactionList1 = JSON.parse('transactions');
// console.log("as parsed from json: ", transactionList1);

// fetch('./TestJSON.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const testAsString1 = `'${test}'`; 

// console.log("test from import", test);


interface TestPerson1 {
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

interface TestPerson2 {}

let typeUpOfTest: TestPerson1 = {
    name: "John",
    middle_name: null,
    age: 100,
    alive: true,
    addresses: {somewhere1: "here", somewhere2:"there", somewhere3: "everywhere"},
    cars: ["Ford", "Skoda", "VW" ]
}

console.log(typeUpOfTest);

// console.log(test);

for (let key in test.testPerson1.addreses){
    // console.log("key", key);
    if (test.testPerson1.addreses.hasOwnProperty(key)){
        // console.log(`${key}: ${test.testPerson1.addreses[key]}`) //[key]
    }
};



const population = {
    male: 4,
    female: 93,
    others: 10
  };
  
  // Iterate through the object
  for (let key in population) {
    if (population.hasOwnProperty(key)) {
    //   console.log(`${key}: ${population[key]}`);
    }
  }



// const obj1 = {
//     name: "John",
//     Age: 100,
//     alive: true
// }
// const obj1ToJSON = JSON.stringify(obj1);
// console.log("object obj1", obj1)
// console.log("stringify obj1ToJSON", obj1ToJSON);



// const testParse1 = JSON.parse(testAsString1);
// // const testParse1 = JSON.parse(test);

// console.log("parse from testParse1", testParse1);

export default function Transaction(){
    
}