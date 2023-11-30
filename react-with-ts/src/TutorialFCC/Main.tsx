import { type } from 'os';
import './StylesSCSS/Main.scss'



// enum as an option
enum Species {Dog, Cat, Fish};

// type SpeciesOf: string[] = ["Dog", "Cat", "Fish"];
// interface as a scafold
interface Animal {
    age: number
    selectSpecies: string
    name: string
}
let collection: Animal[];



export default function Main(){

    const inputName = ()=>{

    }
    
    return(
        <div>
            <input placeholder='name'></input>
            <input placeholder='age'></input>
            {/* make an option for selecting a species form the interface*/}
            <select>
                <option>{}</option>
            </select>
        </div>
    )
}