// typescript pre-validates the ts type with the ts compiler.




class AClass {constructor(parameters: string) {
    return parameters
    // lav rigtig klasse
}}
interface Interface {}
type AnArray = Array<unknown>;
let anArray: AnArray = [];
const numberA = 2;
const stringA = "B";
const boolA = false;
anArray.push(numberA, stringA, boolA)
anArray.map(item => {
    console.log("item", item)
})

interface objectTypes {
    property1: AClass
    property2: Interface
    property3: AnArray
}

type Astring = string;
type withoutTypeCheching = any;
type anyWithSomething = unknown;
enum EnumType {a, b, c, d}

interface primitiveTypes {
    propertyType1: number
    propertyType2: string
    propertyType3: boolean
    propertyType4: EnumType
    propertyType5: void
    propertyType6: null
    propertyType7: undefined
}

export default function Types(){

}