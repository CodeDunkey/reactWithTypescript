import { Link } from 'react-router-dom'
import '../StyleSCSS/Navbar.scss'
export default function Navbar(){
    return(
        <div className='navbar'>
            <nav>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/Store" className='Link'>Store</Link>
                <Link to="/About" className='Link'>About</Link>
            </nav>
        </div>
    )
}