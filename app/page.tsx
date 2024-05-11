import Products from "@/components/Products";
import { getAllProducts } from "@/lib/server";

export default async function page() {
  const products = await getAllProducts();
  return (
    <main>
      <header className="mt-4">
        <h1 className="text-center  text-7xl font-semibold">Product Store</h1>
        <div className="h-3 w-36 bg-primary mx-auto"></div>
      </header>
      <main>
        <Products products={products} />
      </main>
    </main>
  );
}
