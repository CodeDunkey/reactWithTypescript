// typescript pre-validates the ts type with the ts compiler.

import { Interface } from "readline";
import { TupleType } from "typescript";


type AnArray = Array<unknown>;
type Astring = string;

let anArray: AnArray = [];
const numberA = 2;
const stringA = "B";
const boolA = false;
anArray.push(numberA, stringA, boolA)

anArray.map(item => {
    console.log("item", item)
})

class AClass {
    
}
const sym1 = Symbol("add");
console.log("sym1",sym1)
type array2 = Array<unknown>

interface objectTypes {
    property1: AClass
    property2: Interface
    property3: Array<unknown>
    // property4: literals
}

type withoutTypeCheching = any;

type anyWithSomething = unknown;

enum enumType {}

interface primitiveTypes {
    propertyType1: number
    propertyType2: string
    propertyType3: boolean
    propertyType4: enumType
    propertyType5: void
    propertyType6: null
    propertyType7: undefined
}

console.log("anArray",anArray)
export default function Animal(){
   
    return(
        <div>
            
        </div>
    )
}