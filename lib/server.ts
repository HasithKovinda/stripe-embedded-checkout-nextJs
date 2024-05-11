"use server";
import Stripe from "stripe";

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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface PayLoad {
  name: string;
  description: string;
  image: string;
  price: number;
}

export async function createStripeCheckout(payLoad: PayLoad): Promise<string> {
  const params: Stripe.Checkout.SessionCreateParams = {
    ui_mode: "embedded",
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          product_data: {
            name: payLoad.name,
            description: payLoad.description,
            images: [payLoad.image],
          },
          currency: "usd",
          unit_amount: payLoad.price * 100,
        },

        quantity: 1,
      },
    ],
    return_url:
      "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
  };
  const { client_secret }: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);
  return client_secret as string;
}

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${base_url}/products`);
  const data = (await res.json()) as Product[];
  return data;
}

export async function getSingleProduct(id: string): Promise<Product> {
  const res = await fetch(`${base_url}/products/${id}`);
  const data = (await res.json()) as Product;
  return data;
}
