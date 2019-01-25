import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

const PayPalButton = ({ value }) => {
  const {
    cartTotal,
    onPaymentSuccess,
    onPaymentCancelled,
    onPaymentError,
    history
  } = value;

  const onSuccess = async payment => {
    // Congratulation, it came here means everything's fine!
    await onPaymentSuccess(payment);
    history.push("/orders");
    console.log("The payment was succeeded!", payment);
  };

  const onCancel = () => onPaymentCancelled();

  const onError = () => onPaymentError();

  let env = "sandbox"; // you can set here to 'production' for production
  let currency = "USD"; // or you can set this value from your props or state

  const client = {
    sandbox:
      "AeDWkLwUw9EOkjjkmEeWYtDfVzSWYH0SGafdw3xX_nK-q7U-EaLJrdaF_J6vT3CpnOD6p7Er3WJe-wj4",
    production: "YOUR-PRODUCTION-APP-ID"
  };
  // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
  return (
    <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={cartTotal}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
};

export default PayPalButton;
