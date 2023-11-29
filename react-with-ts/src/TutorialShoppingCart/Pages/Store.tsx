
import StoreItem from '../Components/StoreItem'
import storeItems from '../Data/items.json'
export default function Store(){
    return(
        <>
        <h3>Store Page</h3>
        {storeItems.map(item =>(
            <div key={item.id}><StoreItem {...item}/></div>
        ))}
        </>

    )
}