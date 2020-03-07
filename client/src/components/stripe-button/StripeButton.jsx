import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_IAunkSUuv3SEKyL707Za4Jky00hGo5IRGL';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token }
    })
      .then(res => alert('Payment Successful'))
      .catch(error => {
        console.log('Payment Error:', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce Project'
      currency='EUR'
      shippingAddress
      billingAddress
      image='https://i.imgur.com/ix46dY3.png'
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel='Make your Payment'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
