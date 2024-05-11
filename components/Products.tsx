import { Product } from "@/lib/server";
import SingleProduct from "./SingleProduct";

function Products({ products }: { products: Product[] }) {
  return (
    <div className="p-4 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:flex-wrap">
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
