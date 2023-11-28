import { Link } from 'react-router-dom'
import '../StyleSCSS/Navbar.scss'
export default function Navbar(){
    return(
        <div className='navbar'>
            <nav className='nav'>
                <div><Link to="/" className='Link'>Home</Link></div>
                <div><Link to="/Store" className='Link'>Store</Link></div>
                <div><Link to="/About" className='Link'>About</Link></div>
            </nav>
            <button className='logo'>Cart
                <div className='indicator'>1</div>
             </button>
        </div>
    )
}