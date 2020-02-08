import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const headerBlocks = [
  { name: 'Product' },
  { name: 'Description' },
  { name: 'Quantity' },
  { name: 'Price' },
  { name: 'Remove' }
];

const Checkout = ({ cartItems, cartTotal }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      {headerBlocks.map(headerBlock => (
        <div key={headerBlock.name} className='header-block'>
          <span>{headerBlock.name}</span>
        </div>
      ))}
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: {cartTotal}€</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
