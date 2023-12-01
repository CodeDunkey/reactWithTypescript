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

interface B{
    height: number
}

interface C extends A, B{
    yearOfBirth: number
}

const c: C = {name:"bob", yearOfBirth: 1990,  age: 100, height: 200} 
console.log("c",c);
const test = 3;

// an intersection
type D = A & B;

// a union
type E = A | B;

const d: D = {name: "bo", age: 100, height: 200}

console.log("d", d.name);

console.log("container", container)
// console.log("", location)

export default function Container(){
   
    return(
        <div>
            {test}{d.name}{c.yearOfBirth}{}{}{}{}
        </div>
    )
}