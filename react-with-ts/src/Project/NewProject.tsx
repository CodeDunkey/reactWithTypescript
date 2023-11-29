import { useState } from 'react'
import './ProjectStylesSCSS/Project.scss'

let collection = [];

// enum as an option
enum Species {Human, Dog, Cat, Fish}
// interface as a scafold
interface Animal {
    age: number
    species: Species
    name: string
}



export default function Project(){
    return(
        <div>
            <h3></h3>
            <input placeholder='type age'></input><input placeholder='type name'></input><select></select>
        </div>
    )
}