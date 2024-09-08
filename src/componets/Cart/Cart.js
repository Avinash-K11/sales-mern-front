import './index.css';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../../images/empty-cart.png'

import { useAuth } from '../../store/auth.js';

const Cart = () => {

    const navigate = useNavigate();

    const { cart, removeItemFromCart, removeCart, isLoggedIn } = useAuth();

    const products =  Array.isArray(cart.items) ? cart.items : [];

    const isCartEmpty = products.length === 0;

    const checkoutClicked = () => {
        if (isLoggedIn) {
            alert("Proceeding to checkout...");
            alert("Thank for your Purchase");
            removeCart();
        } else {
            alert("Login to add to cart!!");
            navigate('/login');
        }
    }

    const emptyCartClick = (e) => {
        e.preventDefault();

        removeCart();
    }

    const calculateTotalPrice = () => {
        return cart.items.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

  return (
    <>
        <div className='cart-container'>
                
                {products.length > 0 ? (
                    <>
                    {products.map((eachObj) => ( 
                        <li key={eachObj.id} className='product-item'>
                            <img src={eachObj.imageUrl} alt='product_image' />
                            <h4>{eachObj.name}</h4>
                            <p>₹ {eachObj.price}</p>
                            <div className='add-cart-container'>
                                <button className='add-cart-btn' onClick={() => removeItemFromCart(eachObj.id)} type='button'>
                                    Remove Product
                                </button>
                            </div>
                        </li>
                    ))}
                    
                </>
                ) : (
                    <img className='empty-img' src={emptyCart} alt='empty-cart' ></img>
                )
            }
            
        </div>
        <div className="cart-summary">
            <h2 disabled={isCartEmpty} >Total Price:₹ {calculateTotalPrice()}</h2>
        </div>
        <div className='cart-actions'>
            <button className='add-cart-btn' onClick={checkoutClicked} type='button'
            disabled={isCartEmpty} >
                Checkout
            </button>
            <button className='add-cart-btn' onClick={emptyCartClick} type='button'
            disabled={isCartEmpty} >
                Empty Cart
            </button>
        </div>
    </>
  );
}

export default Cart
