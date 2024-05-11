"use server";
const base_url = "https://fakestoreapi.com";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${base_url}/products`);
  const data = (await res.json()) as Product[];
  return data;
}

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createStripeCheckout(): Promise<string> {
  const params: Stripe.Checkout.SessionCreateParams = {
    ui_mode: "embedded",
    payment_method_types: ["card"],
    customer_email: "abc@gmail.com",
    mode: "payment",
    line_items: [
      {
        price_data: {
          product_data: {
            name: "T-Shirt",
            description: "This is very good T-shirt",
            images: [
              "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            ],
          },
          currency: "usd",
          unit_amount: 200 * 100,
        },

        quantity: 1,
      },
    ],
    return_url: "http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}",
  };
  const { client_secret }: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  return client_secret as string;
}
