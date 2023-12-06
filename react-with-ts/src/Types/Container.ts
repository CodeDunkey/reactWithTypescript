import { type } from "os"

// type Object
type CellOne = {
    contains: string
    height: number
    width: number
    fragile: boolean
}

// type Object
type CellTwo = {
    containsLiquid: boolean
    needsCooling: boolean
    temperature: number
}

// interface
interface Container {
    typeOfCells: CellOne | CellTwo // is a union
    numberOfCells: number
}

const container: Container = {
    typeOfCells:{contains: "computers", height: 40, width: 40, fragile: true}, numberOfCells: 100
}

// interface Latitude {north?: number, south?: number }
// interface Longitude {east?: number, west?: number}

// const location: Latitude & Longitude= { north: 40.40, east: 27.94}

// tuple. A fixed set of array elements.
type Tuple1 = [string, number, boolean]

let tuple1: Tuple1 = ["anc", 123, true]
 
console.log("tuple1", tuple1);

interface A {
    name: string
    age: number
}

type Aa = {
    cPR: number
    alive: boolean
}

interface B{
    weight: number
}

type Bb = {
    height: number
}

type AnArray = []

type CheckFunction1 = ()=>{
    
}



interface C extends A, B{
    yearOfBirth: number
}

// an intersection
type D = A & B;

// a union
type E = A | B;

// type F = ;

let union1: string | number;



const a: Aa = { cPR: 123, alive:true} 

const b: Bb & B= {height: 300, weight: 300}

const c: C = {name:"bob", yearOfBirth: 1990,  age: 100, weight: 200} 

const d: D = {name: "bo", age: 100, weight: 200}

const e: E = {weight: 200}

console.log("container", container)
console.log("a",a.alive, a.cPR);
console.log("bjhjv");
console.log("c",c.yearOfBirth, c.name);
console.log("d", d.name);
console.log("e", e.weight);

// console.log("", location)


interface ToBeIntersectedOrExtended1 {
    name1: string
}
interface ToBeIntersectedOrExtended2 {
    name2: number
}
interface ToBeIntersectedOrExtended3 extends ToBeIntersectedOrExtended2 {
    name3:boolean
}

class Class1 {}

interface ExtendWithClass extends Class1 { prop1: boolean}

const extendWithClass: ExtendWithClass = {prop1: true}
console.log("extendWithClass", extendWithClass)

type ToBeIntersectedOrExtended4 = {
    name4: string
}
type ToBeIntersectedOrExtended5 = {
    name5: number
}

// A type cannot be extended since it is a primitive type, and not of type object
// type ToBeIntersectedOrExtended6 extends ToBeIntersectedOrExtended5 = {
//     name6: boolean
// }
// let extended2: ToBeIntersectedOrExtended6 {name6: true, name5: 123};
// console.log("extented",extended2);


const intersected1 : ToBeIntersectedOrExtended1 & ToBeIntersectedOrExtended2 = {name1:"abc", name2: 123};
const extended1: ToBeIntersectedOrExtended3 = {name3: true, name2:123};
console.log("extented",intersected1);
console.log("extented",extended1);
let intersected2 : ToBeIntersectedOrExtended4 & ToBeIntersectedOrExtended5 = {name4:"abc", name5: 123};
console.log("extented",intersected2);


type AFunctionProps = string;


type AFunction = (prop: AFunctionProps)=> void

const AaFunction: AFunction = (prop)=>{

    const useProp = prop
    console.log("Function useProp",useProp);
    const showList = document.getElementById("root");
    const aSpan = document.createElement("span");
    aSpan.textContent = "Typescript Interface Types Enum Union Intersection Type-inference Type-guard Generics";
    showList?.appendChild(aSpan);

}
 

export default function Container(){
  AaFunction("abc");
    
}
