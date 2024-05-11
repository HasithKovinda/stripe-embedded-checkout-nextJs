"use client";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { createStripeCheckout, getSingleProduct } from "@/lib/server";

const public_key =
  "pk_test_51PFFmiLUi4x87ljAs2ciDoP6QHM2GAhvHCLJ7QHsXpvJuTJorPqMthNRDpKzYwcSrC62VWgvFyaBsPGm9czFnMih00Po9h5nYE";

function Page() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  if (!productId)
    return (
      <h1 className="text-5xl text-red-500 text-center">No Valid Product Id</h1>
    );

  async function fetchClientSecret(): Promise<string> {
    const { title, price, description, image } = await getSingleProduct(
      productId!
    );
    const client_secret = await createStripeCheckout({
      name: title,
      price,
      description,
      image,
    });
    return client_secret;
  }
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

export default Page;
