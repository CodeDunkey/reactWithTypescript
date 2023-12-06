type Thing1 = {
    edges: number
    shape: string
}

const t1: Thing1 = {edges: 5, shape: "circle"}

interface Thing2 {
    material: string
    isMetal: boolean
}

const t2: Thing2 = {material: "plastic", isMetal: false}

interface Thing3 {
    name: string
    
}

type Choose1 = Thing1 | Thing2;

let C1: Choose1;

type One1 = string;
let one1: One1 = "a";

// console.log("find value", one1);

// const IsThing1 = (param: Choose1): param is Thing1 =>{
//     console.log(param as Thing1);
//     return true
// }
const IsThing1 = (param: Choose1) =>{
    console.log(param);
}


export default function MyFunction2(){
    // IsThing1(t1);
}