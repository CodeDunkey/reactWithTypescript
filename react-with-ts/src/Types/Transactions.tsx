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

interface TestPerson2 { }

let typeUpOfTest: TestPerson1 = {
    name: "John",
    middle_name: null,
    age: 100,
    alive: true,
    addresses: { somewhere1: "here", somewhere2: "there", somewhere3: "everywhere" },
    cars: ["Ford", "Skoda", "VW"]
}

console.log(typeUpOfTest);

// console.log(test);

for (let key in test.testPerson1.addreses) {
    // console.log("key", key);
    if (test.testPerson1.addreses.hasOwnProperty(key)) {
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

export default function Transaction() {

}

// {
//     "transactionList": [
//         {
//             // "accountCombinedKey": "e2NsZWFyaW5nOiI5OTYxIixhY2NvdW50OiI5OTYxMDk0OTgwNDY0MDIiLGFncmVlbWVudDoiOTk2MTc3MjY1MDE1ODI1Iix1c2VyOiI5OTYxOTUwMjM4OCJ9",
//             // "transactionCombinedKey": "e2FjY291bnQ6Ijk5NjEwOTQ5ODA0NjQwMiIsYWdyZWVtZW50OiI5OTYxNzcyNjUwMTU4MjUiLHRyYW5zYWN0aW9uaWQ6Ijk5NjEwOTQ5ODA0NjQwMkAwQTEwRUZCRkAyMDIzLTA5LTA4QDIwMjMtMDktMDgtMTEuNTQuNTYuODU1NTAyIix1c2VyOiI5OTYxOTUwMjM4OCJ9",
//             // "bookingDate": "2023-09-08",
//             // "valueDate": "2023-09-08",
//             // "originalDate": "2023-09-08",
//             // "availableDate": "2023-09-08",
//             // "transactionText": "Overførsel",
//             // "individualText": "",
//             // "customizedText": "",
//             // "statementText": "Overførsel",
//             // "postingConditionRelationshipText": "",
//             // "transactionAmount": {
//             //     "amount": {
//             //         "decimalValue": 1.00,
//             //         "integerValue": 100,
//             //         "noOfDecimals": 2
//             //     },
//             //     "currencyCode": "DKK"
//             // },
//             // "originalAmount": {
//             //     "amount": {
//             //         "decimalValue": 1.00,
//             //         "integerValue": 100,
//             //         "noOfDecimals": 2
//             //     },
//             //     "currencyCode": "DKK"
//             // },
//             // "transactionType": "aicl",
//             // "corebankTimestamp": "2023-09-08T09:54:56.855502+00:00",
//             // "balance": {
//             //     "decimalValue": 466403.73,
//             //     "integerValue": 46640373,
//             //     "noOfDecimals": 2
//             // },
//             // "isReconciled": false,
//             // "isCombinedPosting": false,
//             // "sortingKey": "99999999",
//             // "senderInfo": {
//             //     "senderAddress1": "Homebankingbruger Fr.",
//             //     "senderAddress2": "Vivian Lund",
//             //     "senderAddress3": "Borupvang 3",
//             //     "senderAddress4": "2750 Ballerup",
//             //     "senderAddress5": "",
//             //     "senderMessage": "",
//             //     "isSenderMessageCutOff": false
//             // }
//         }
//     ]
// }

interface SenderInfo {
    senderAddress1: string,
    senderAddress2: string,
    senderAddress3: string,
    senderAddress4: string,
    senderAddress5?: string,
    senderMessage?: string,
    isSenderMessageCutOff: boolean
}

interface Balance {
    decimalValue: number,
    integerValue: number,
    noOfDecimals: number
}

interface amount2 {
        decimalValue: number,
        integerValue: number,
        noOfDecimals: number
    }

interface originalAmount extends amount2{
    currencyCode: string
}

interface amount1 {
    decimalValue: number,
    integerValue: number,
    noOfDecimals: number
}

interface transactionAmount extends amount1{       
    currencyCode: string
}

interface ATransaction extends transactionAmount, originalAmount, Balance, SenderInfo{
    accountCombinedKey: string,
    transactionCombinedKey: string,
    bookingDate: string,
    valueDate: string,
    originalDate: string,
    availableDate: string,
    transactionText: string,
    individualText?: string,
    customizedText?: string,
    statementText: string,
    postingConditionRelationshipText?: string,

    transactionType: string,
    corebankTimestamp: string,

    isReconciled: boolean,
    isCombinedPosting: boolean,
    sortingKey: number,
}

interface ATransactionList { transaction: ATransaction[]};

