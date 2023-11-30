import dice from '../images/dice.png'
import { useState } from 'react'
import '../StyleSCSS/StoreItem.scss'
import { Url } from 'url'

type StoreItemProps = {
    name: string
    id: number
    imgUrl: string
    imgSize: string
}

export default function StoreItem({name, id, imgUrl, imgSize}:StoreItemProps){
    const [quantity, setQuantity] = useState(0);
    
    console.log("quantity: ",quantity);

    const showAddToCart = ()=>{
         if(quantity === 0){
            return(
            <button className='addToCartButton' onClick={()=>addQuantity()}>Add to cart</button>
            )
        }
        if(quantity > 0){
            return(
                <div >
                    <button onClick={()=>addQuantity()}>+</button>{quantity} in cart
                    <button onClick={()=>lowerQuantity()}>-</button>
                </div>
            )
        }
    }

    const addQuantity = ()=>{
        let addToQuantity = quantity;
        addToQuantity += 1;
        setQuantity(addToQuantity);
        console.log("it works");
        
    }
    
    const lowerQuantity = ()=>{
        let lowerQuantity = quantity;
        lowerQuantity -= 1;
        setQuantity(lowerQuantity);
    }

    console.log("quantity: ",quantity);
    
    return(
        <div className='itemWrapper'>
            <div className='itemImage' style={{backgroundImage: `url(${imgUrl})`, backgroundSize: imgSize}}> 
               
            </div>
            
            <div className='itemInfo'>
                <div className='itemNameId'>
                    <h3>{name}</h3>
                    <h3>{id}</h3>
                </div>
                <div className='itemToCart'>
                        {showAddToCart()}
                </div>
            </div>
        </div>
    )
}

// 