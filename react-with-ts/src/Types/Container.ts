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

type AnArray [ 
    a:string,
    
]

interface C extends A, B{
    yearOfBirth: number
}

// an intersection
type D = A & B;

// a union
type E = A | B;

const a: Aa = { cPR: 123, alive:true} 

const b: Bb & B= {height: 300, weight: 300}

const c: C = {name:"bob", yearOfBirth: 1990,  age: 100, weight: 200} 

const d: D = {name: "bo", age: 100, weight: 200}

const e: E = {weight: 200}

console.log("container", container)
console.log("a",a.alive, a.cPR);
console.log("b",);
console.log("c",c.yearOfBirth, c.name);
console.log("d", d.name);
console.log("e", e.weight);

// console.log("", location)

type AFunctionProps = {
    subject1: string
}

type AFunction = ()=>{

    


}

const AaFunction = ()=>{


    const showList = document.getElementById("root");
    const aSpan = document.createElement("span");
    aSpan.textContent = "Typescript Interface Types Enum Union Intersection Type-inference Type-guard Generics";
    showList?.appendChild(aSpan);
}
 

export default function Container(){
  AaFunction();
    
}
