import { useState } from 'react';
import './Car.scss'

type A = {
    a: boolean
    b:string
}

let A = {a: true, b:"abc"};

type B = A & {
    c: number
}

let B ={ A:{a:true, b: "abc", c:22}} 

console.log(B);

type manufacture = string;

// type T = <>[];

type MyFunction = () => {
   
        
    
};
// 
// console.log(M)

// const t = [1, 2, 3].map(number => ({age: 276}));
// [].reduce

type mixin = (a: number, b: string) => void

const mixinFuntion: mixin = (a, b) => {
    // console.log(a,b);

    return(
        <h3>a: {a} b: {b}</h3>
    )
};

// mixinFuntion(4, "abc");


type fuelType = string | number 

interface Engine  {
    type: string
    fuelAmount: number
    fuelType: fuelType
}

interface Car  {
    name: string;
    model: string
    speed: number
    engine: Engine
    manufactore: manufacture
}

const c: Car = {
    name: "VW Up",
    model: "UP",
    engine: {
        type: "something",
        fuelAmount: 40,
        fuelType: "Petrol"
    },
    manufactore: "VW",
    speed: 120
}

interface Person {
    name: string;
    age: number;
}

const p: Person = {
    name: "Bob",
    age: 80
}

type Something = Car | Person;

let x: Something = p as Something;

const outputPersonAge = (person: Person) => {
    console.log(person.age);
}

const isPerson = (something: Something): something is Person => {
    return !!(something as Person).age;
}

if (isPerson(x)) {
    outputPersonAge(x);
}

console.log(x);

const car: Car = {name: "",model:"oktavia", speed: 200, engine: {type: "V8", fuelAmount: 40, fuelType: "4"}, manufactore: "skoda"};

// console.log(car);

export default function ACar(){
    const [add, setAdd] = useState(0);
    const AddH3 = ()=>{
        let addOne = add;
        addOne += 1;
        setAdd(addOne);
    }
    const addIt = ()=>{if(add >0){return<h3 className='car'>it works</h3>}};

    return(
        <div>
            <button >function</button>
            
        </div>
    )
}

// className='wrapper' 