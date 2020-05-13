import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Yo6CFypLZgw4uXjs52JbfszE00KFIPdWeO";
  const onToken = async (token) => {
    try {
      await axios({
        url: "payment",
        method: "POST",
        data: { token, amount: priceForStripe },
      });
      alert("Payment Successful");
    } catch (err) {
      console.log(err);
      alert("Please use provided card");
    }
  };
  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total amount is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
