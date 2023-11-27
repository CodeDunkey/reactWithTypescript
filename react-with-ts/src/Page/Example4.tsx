enum ContractStatus {
    Permanent = 1,
    Temporary,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temporary;
console.log("employeeStatus: ", employeeStatus);
console.log("employeeStatus: ", ContractStatus[employeeStatus]);
console.log("employeeStatus: ", ContractStatus);

let randomValue1: any = 10;
randomValue1 = "abc";
console.log("any: ", randomValue1.name)

let randomValue2: unknown = 10;
randomValue2 = "abc";
console.log("unknown: ", (randomValue2 as string).toUpperCase())


export default function EnumFunction(){
    return(
        <div>

        </div>
    )
}