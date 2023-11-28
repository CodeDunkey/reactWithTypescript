type StoreItemProps = {
    name: string
    id: number
}

export default function StoreItem({name, id}:StoreItemProps){
    return(
        <div>{name} {id}</div>
    )
}