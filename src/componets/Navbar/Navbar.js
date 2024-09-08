import './navbar.css';
import logo from '../../images/Premier_Foods-Logo.png';

import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '../../store/auth';

const Navbar = (props) => {

        const { isLoggedIn, cart } = useAuth();
        const products = Array.isArray(cart.items) ? cart.items : [];

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
                    <li className="cart-menu-con">
                        <NavLink to='/cart'>
                            Cart <span className="cart-count">{products.length}</span>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        );
};

export default Navbar;