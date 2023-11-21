const TestButton1 = ({title}:{title: string})=>{
    return (
        <button>{title}</button>
    )
}

interface TestButton2I {
    title: string;
    disabled: boolean;
}

const TestButton2 = ({title, disabled}: TestButton2I)=>{
    return(
        <button disabled={disabled}>{title}</button>
    )
}

export default function Main(){
    return(
        <div>
            <h1>react with typescript</h1>
            <h3>
            <br/>* Interfaces
            <br/>* Types
            <br/>* Enum
            <br/>* Union / intersection
            <br/>* Type inference
            <br/>* Typeguard
            <br/>* Generics
            </h3>
            <TestButton1 title="Test 1"/> <br/><br/>
            <TestButton2 title="Test 2" disabled={true}/>
        </div>
    )
}