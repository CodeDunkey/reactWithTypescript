import '../StyleSCSS/StoreItem.scss'

type StoreItemProps = {
    name: string
    id: number
    
}

export default function StoreItem({name, id}:StoreItemProps){
    return(
        <div className='itemWrapper'>
            <div className='itemInfo' > 
            </div>
            
            <div className='itemToCart'>
                <h3>{name}</h3>
                <h3>{id}</h3>
            </div>
        </div>
    )
}

//style={{backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}