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
