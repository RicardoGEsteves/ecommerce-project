import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

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
  <div className='checkout'>
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
    <div className='test-warning'>
      *Please use de following credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </div>
    <StripeButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
