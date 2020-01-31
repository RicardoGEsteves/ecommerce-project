import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

import './shop-item.scss';

const ShopItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='shop-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='shop-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to cart{' '}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);
