import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "./ChechkoutForm";
import "./pay.css";

const stripePromise = loadStripe(
  "pk_test_51PPxfy1keL6dTdb0icCwgRBT62mywbnpU6AQywXssUtoSezYL812kpDYHUOdNANVnNjjJFcE1SXlEXp7CT6ICBTR008qZd2APY"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();
  const location = useLocation();
  const { price } = location.state;
  const gigId = id;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${gigId}`,
          {
            gigId,
            price,
          }
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [gigId]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {clientSecret && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Complete Your Payment
          </h2>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Pay;
