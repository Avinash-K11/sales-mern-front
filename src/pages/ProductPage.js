import React from 'react';

import ProductItem from '../componets/ProductItem/ProductItem';

const ProductPage = ({ dealList, productList }) => {
  return (
    <div>
        <div className="products-section">
            <h2 className="title">Deals Of The Day</h2>
            <ul className="products-row-list">
                {dealList.map((eachObj)=> 
                <ProductItem product={eachObj} key={eachObj.id} />
                )}
            </ul>
        </div>

        <div className="products-section">
            <h2 className="title">All Products</h2>
            <ul className="products-row-list">
                {productList.map((eachObj)=> 
                <ProductItem product={eachObj} key={eachObj.id} />
                )}
            </ul>
        </div>
    </div>
  )
}

export default ProductPage
