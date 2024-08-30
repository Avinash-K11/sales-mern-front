import './navbar.css';
import logo from '../../images/Premier_Foods-Logo.png';

import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '../../store/auth';

const Navbar = () => {

        const { isLoggedIn } = useAuth();
    
        return (
            <nav>
                <Link to='/'>
                    <img className="logo" src={logo} alt="Premier-Foods-Logo"/>
                </Link>

                <ul className="open" >
                    <li  className='nav-links'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li  className='nav-links'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>

                    { isLoggedIn ?  
                        <li  className='nav-links'>
                            <NavLink to='/logout'>Logout</NavLink>
                        </li> 
                        : <>
                            <li  className='nav-links'>
                                <NavLink to='/signup'>SignUp</NavLink>
                            </li> 

                            <li  className='nav-links'>
                                <NavLink to='/login'>Login</NavLink>
                            </li> 
                        </> 
                    }
                    
                   
                </ul>
            </nav>
        );
};

export default Navbar;