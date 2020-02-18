import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const headerBlocks = [
  { name: 'Product' },
  { name: 'Description' },
  { name: 'Quantity' },
  { name: 'Price' },
  { name: 'Remove' }
];

const Checkout = ({ cartItems, cartTotal }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      {headerBlocks.map(headerBlock => (
        <HeaderBlockContainer key={headerBlock.name}>
          <span>{headerBlock.name}</span>
        </HeaderBlockContainer>
      ))}
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: {cartTotal}€</TotalContainer>
    <WarningContainer>
      *Please use de following credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
    </WarningContainer>
    <StripeButton price={cartTotal} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
