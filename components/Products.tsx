import { Product } from "@/lib/server";
import SingleProduct from "./SingleProduct";

function Products({ products }: { products: Product[] }) {
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap p-4">
      {products.map((product) => {
        const { id, title, description, image, rating, price } = product;
        return (
          <SingleProduct
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            rating={rating}
            price={price}
          />
        );
      })}
    </div>
  );
}

export default Products;
