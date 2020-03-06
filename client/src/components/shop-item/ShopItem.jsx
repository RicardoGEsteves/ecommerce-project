import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  ShopItemContainer,
  ShopFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './shop-item.styles';

const ShopItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <ShopItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <ShopFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}€</PriceContainer>
      </ShopFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        {' '}
        Add to cart{' '}
      </AddButton>
    </ShopItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);
