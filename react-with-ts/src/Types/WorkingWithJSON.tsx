// I json skal keys være strenge, med tuborgklammer. Ex: {"name":"John"}

// In JSON, values must be one of the following data types:
// a string
// a number
// an object
// an array
// a boolean
// null
// and can not be:
// a function
// a date
// undefined

// In JavaScript values can be:
// a string
// a number
// an object
// an array
// a boolean
// null
// a function
// a date
// undefined

// skal types op

// "myList": [
//     {
//         "nr": "Dk0OTgwNDDoiOTk2MTc3MjY1MDE1ODI1Iix1c2VyOiI5OTYxOTUwMjM4OCJ9",
//         "nr2": "eOiI5OTYxOTUwMjM4OCJ9",
//         "bookingDate": "2023-09-08",
//         "valueDate": "2023-09-08",
//         "originalDate": "2023-09-08",
//         "availableDate": "2023-09-08",
//         "Text": "Overførsel",
//         "Amount": {
//             "amount": {
//                 "decimalValue": 1.00,
//                 "integerValue": 100,
//                 "noOfDecimals": 2
//             },
//             "currencyCode": "US"
//         },
//         "originalAmount": {
//             "amount": {
//                 "decimalValue": 1.00,
//                 "integerValue": 100,
//                 "noOfDecimals": 2
//             },
//             "currencyCode": "US"
//         },
//     }
// ]



interface Amount {
    amount: {
      decimalValue: number;
      integerValue: number;
      noOfDecimals: number;
    };
    currencyCode: string;
  }
  
  interface MyListEntry {
    nr: string;
    nr2: string;
    bookingDate: string;
    valueDate: string;
    originalDate: string;
    availableDate: string;
    Text: string;
    Amount: Amount;
    originalAmount: Amount;
  }
  
  interface MyListData {
    myList: MyListEntry[];
  }
  
  const jsonData: MyListData = {
    myList: [
      {
        nr: "Dk0OTgwNDDoiOTk2MTc3MjY1MDE1ODI1Iix1c2VyOiI5OTYxOTUwMjM4OCJ9",
        nr2: "eOiI5OTYxOTUwMjM4OCJ9",
        bookingDate: "2023-09-08",
        valueDate: "2023-09-08",
        originalDate: "2023-09-08",
        availableDate: "2023-09-08",
        Text: "Overførsel",
        Amount: {
          amount: {
            decimalValue: 1.0,
            integerValue: 100,
            noOfDecimals: 2,
          },
          currencyCode: "US",
        },
        originalAmount: {
          amount: {
            decimalValue: 1.0,
            integerValue: 100,
            noOfDecimals: 2,
          },
          currencyCode: "US",
        },
      },
    ],
  };
  
  console.log(jsonData);
export default function WWJSON(){}