import './index.css';

import { useAuth } from '../../store/auth';

const ProductItem = (props) => {
    const { product } = props;

    const { addToCart } = useAuth();

    const onAddClicked = (e) => {
        addToCart(product);
    }

    return(
        <li className='product-item'>
            <img src={product.imageUrl} alt='product_image' />
            <h4>{product.name}</h4>
            <h5>{product.brand}</h5>
            <p>₹ {product.price}</p>
            <div className='add-cart-container'>
                <button className='add-cart-btn' onClick={onAddClicked} type='button'>
                    Add to cart
                </button>
            </div>
        </li>
    );
};

export default ProductItem;