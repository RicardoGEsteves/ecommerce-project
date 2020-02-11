import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_IAunkSUuv3SEKyL707Za4Jky00hGo5IRGL';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
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
