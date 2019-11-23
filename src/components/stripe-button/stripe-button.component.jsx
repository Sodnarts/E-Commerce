import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_zlSCYeKBpedtAnxi1DP8EtCn00LD51VHA8';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="E-Commerce"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={() => onToken}
            stripeKey={publicKey}
        />
    );
};

export default StripeCheckoutButton;
