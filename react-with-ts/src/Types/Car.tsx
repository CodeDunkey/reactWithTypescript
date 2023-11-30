import { useState } from 'react';
import './Car.scss'



type manufacture = string;

// 

type mixin = (a: number, b: string) => void

const mixinFuntion: mixin = (a, b) => {
    console.log(a,b);

    return(
        <h3>a: {a} b: {b}</h3>
    )
};

// mixinFuntion(4, "abc");


type fuelType = string | number 

interface Engine  {
    type: string
    fuelAmound: number
    fuelType: fuelType
}

interface Car  {
    model: string
    speed: number
    engine: Engine
    manufactore: manufacture
}

const car: Car = {model:"oktavia", speed: 200, engine: {type: "V8", fuelAmound: 40, fuelType: "4"}, manufactore: "skoda"};

console.log(car);

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
            <button onClick={()=>AddH3()}>function</button>
            {addIt()}
            {/* {AddH3()} */}
        </div>
    )
}

// className='wrapper' 