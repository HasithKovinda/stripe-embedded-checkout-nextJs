"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { createStripeCheckout } from "@/lib/server";

const public_key =
  "pk_test_51PFFmiLUi4x87ljAs2ciDoP6QHM2GAhvHCLJ7QHsXpvJuTJorPqMthNRDpKzYwcSrC62VWgvFyaBsPGm9czFnMih00Po9h5nYE";

async function fetchClientSecret(): Promise<string> {
  const client_secret = await createStripeCheckout();
  console.log("🚀 ~ fetchClientSecret ~ client_secret:", client_secret);
  return client_secret;
}

async function page() {
  const option = { fetchClientSecret };

  const stripe = loadStripe(public_key);

  return (
    <main className="p-5">
      <EmbeddedCheckoutProvider stripe={stripe} options={option}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </main>
  );
}

export default page;
