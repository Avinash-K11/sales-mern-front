import React from 'react';

import Banner from '../componets/Banner/Banner';
import ProductItem from '../componets/ProductItem/ProductItem';

const HomePage = ({ dealList }) => {

  return (
    <div>
        <Banner />
        <div className="products-section">
        <h2 className="title">Deals Of The Day</h2>
        <ul className="products-row-list">
            {dealList.map((eachObj)=> 
            <ProductItem product={eachObj} key={eachObj.id} />
            )}
        </ul>
        </div>
    </div>
  )
}

export default HomePage
