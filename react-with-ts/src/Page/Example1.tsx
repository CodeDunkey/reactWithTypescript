import '../PageStylesSCSS/button.scss'


type choise = "one" | "two" | "three";

interface Theme2 {
    color: string
    number: number
    is: boolean
}


const openForm = ()=>{
    return(
        <div>
            <button></button>
        </div>
    )
}

const closeForm = ()=>{
    return(
        <div>
            <button></button>
        </div>
    )
}

const Input1 = ()=>{
    return(
        <input placeholder='Type here:'></input>
    )
}

export default function TypeScript(){
    return(
        <div>
            <h3>TypeScript <br/>Here you'll see an example of </h3>
            <Input1 />
            <button className="buttonclick" onClick={()=>openForm()}>Open 
                <button onClick={()=>closeForm()}>X</button>
            </button>
        </div>
    )
}