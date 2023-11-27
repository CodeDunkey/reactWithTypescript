import { useState } from 'react';
import ReducerFunction from './Example2';
import ContentFunction from './Example3';
import EnumFunction from './Example4';

const TestButton1 = ({title}:{title: string})=>{
    return (
        <button>{title}</button>
    )
}

interface TestButton2I{
    readonly title: string;
    disabled: boolean;
}

const TestButton2 = ({title, disabled}: TestButton2I)=>{
    return(
        <button disabled={disabled}>{title}</button>
    )
}

const TestButton3 = ()=>{
    // is it a union???
    type State = "idle" | "loading" | "succes" | "error";
    const [status, setStatus] = useState<State>("idle");
    
    type RequestState = 
    | {status: 'idle'}
    | {status: 'loading'}
    | {status: 'succes', data: any}
    | {status: 'error', error: Error};
    const [requestState, setReguestS] = useState<RequestState>({status: "idle"});

    const ButtonClick = ()=>{

    }

    console.log(requestState);
    let buttomText = requestState.status;
    return(
        <button onClick={ButtonClick}>{buttomText}</button>// requestState
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
            <TestButton1 title="Test 1"/> 
            <br/><br/><TestButton2 title="Test 2" disabled={true}/>
            <br/><br/><TestButton3/>
            <ReducerFunction/>
            <ContentFunction/>
            <EnumFunction/>
        </div>
    )
}