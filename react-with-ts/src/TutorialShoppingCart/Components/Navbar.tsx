import { Link } from 'react-router-dom'
import '../StyleSCSS/Navbar.scss'
export default function Navbar(){
    
    const openCart = ()=>{
        console.log("it works");
    }


    return(
        <div className='navbar'>
            <nav className='nav'>
                <div><Link to="/" className='Link'>Home</Link></div>
                <div><Link to="/Store" className='Link'>Store</Link></div>
                <div><Link to="/About" className='Link'>About</Link></div>
            </nav>
            <button className='logo' onClick={()=>openCart()}>Cart
                <div className='indicator'></div>
             </button>
        </div>
    )
}