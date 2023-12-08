import transactions from './transactionList.json'
import test from './TestJSON.json'
import { assert } from 'console'
import { json } from 'stream/consumers';

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

export default function Transaction() {

}

interface Senderinfo {
    senderInfo: {
        senderAddress1: string,
        senderAddress2: string,
        senderAddress3: string,
        senderAddress4: string,
        senderAddress5?: string,
        senderMessage?: string,
        isSenderMessageCutOff: boolean
    },
}

interface Amount {
    decimalValue: number,
    integerValue: number,
    noOfDecimals: number
}

interface AmountWithCurrency {
    amount: Amount,
    currencyCode: string
}

interface Transaction_Data extends Senderinfo {
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

    transactionAmount: AmountWithCurrency,

    originalAmount: AmountWithCurrency,

    transactionType: string,
    corebankTimestamp: string,

    balance: Amount,

    isReconciled: boolean,
    isCombinedPosting: boolean,
    sortingKey: string,
}

interface Transaction_List {
    transactionList: Transaction_Data[]
}

const transactionList: Transaction_List = {
    transactionList: [
        {
            accountCombinedKey: "e2NsZWFyaW5nOiI5OTYxIixhY2NvdW50OiI5OTYxMDk0OTgwNDY0MDIiLGFncmVlbWVudDoiOTk2MTc3MjY1MDE1ODI1Iix1c2VyOiI5OTYxOTUwMjM4OCJ9",
            transactionCombinedKey: "e2FjY291bnQ6Ijk5NjEwOTQ5ODA0NjQwMiIsYWdyZWVtZW50OiI5OTYxNzcyNjUwMTU4MjUiLHRyYW5zYWN0aW9uaWQ6Ijk5NjEwOTQ5ODA0NjQwMkAwQTEwRUZCRkAyMDIzLTA5LTA4QDIwMjMtMDktMDgtMTEuNTQuNTYuODU1NTAyIix1c2VyOiI5OTYxOTUwMjM4OCJ9",
            bookingDate: "2023-09-08",
            valueDate: "2023-09-08",
            originalDate: "2023-09-08",
            availableDate: "2023-09-08",
            transactionText: "Overførsel",
            individualText: "",
            customizedText: "",
            statementText: "Overførsel",
            postingConditionRelationshipText: "",

            transactionAmount: {
                amount: {
                    decimalValue: 1.00,
                    integerValue: 100,
                    noOfDecimals: 2
                },
                currencyCode: "DKK"
            },

            originalAmount: {
                amount: {
                    decimalValue: 1.00,
                    integerValue: 100,
                    noOfDecimals: 2
                },
                currencyCode: "DKK"
            },

            transactionType: "aicl",
            corebankTimestamp: "2023-09-08T09:54:56.855502+00:00",

            balance: {
                decimalValue: 466403.73,
                integerValue: 46640373,
                noOfDecimals: 2
            },

            isReconciled: false,
            isCombinedPosting: false,
            sortingKey: "99999999",

            senderInfo: {
                senderAddress1: "Homebankingbruger Fr.",
                senderAddress2: "Vivian Lund",
                senderAddress3: "Borupvang 3",
                senderAddress4: "2750 Ballerup",
                senderAddress5: "",
                senderMessage: "",
                isSenderMessageCutOff: false
            },
        },
    ],
}

console.log(transactions)
console.log(transactionList)