import React from 'react';

import './shop-item.scss';

const ShopItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='shop-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='shop-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default ShopItem;
