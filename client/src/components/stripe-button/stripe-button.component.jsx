import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IVyV8KznuWoI3kwZSDYt9AjQz7GWOqwzaKZ9fzeu0DKwpJ9Ck041F0RuPo1vg85rRcKsKbRuLjZ8ANVXcUa2FUg00TR72Qy7X';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment. Please sure you use the provided credid card.'
      );
    });
  };

  return(
    <StripeCheckout
      label='Pay Now'
      name='My Test Shop Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;