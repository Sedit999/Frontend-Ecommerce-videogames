import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
const PPK =
  "ARrXHudSP8_gH9R7DKYt98eeUpRXNSPrBitIeoHDg5AUfGwZscPAo_nPOBsWUtaK6xvilQrk6QilfXWt";

function PaypalBtn({ value }) {
  const navigate = useNavigate();
  const cleanCart = () => {
    localStorage.removeItem("cartList");
    navigate("/");
  };
  return (
    <PayPalScriptProvider options={{ "client-id": PPK }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
            cleanCart();
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PaypalBtn;
