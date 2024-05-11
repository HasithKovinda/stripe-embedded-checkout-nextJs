import { Product } from "@/lib/server";
import Rating from "./Rating";
import PayButton from "./PayButton";

function SingleProduct({
  id,
  title,
  description,
  image,
  rating,
  price,
}: Product) {
  return (
    <article className="mt-10 rounded-xl max-w-md px-5  border-zinc-100 border-2 mb-10 shadow-lg">
      <div className="flex items-center justify-center">
        <img src={image} alt={title} className="h-72 w-80 object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-slate-400 text-wrap">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-5">
          <span className="font-bold text-3xl text-gray-600">${price}</span>
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-primary inline-block"></span>
            <span className="text-primary">In stock</span>
          </div>
        </div>
        <p className="mt-5 text-wrap tracking-wide text-slate-400">
          {description}
        </p>
      </div>
      <div className="flex items-center mt-2">
        <Rating ratingNumber={rating.rate} />
        <span>({rating.count} Reviews)</span>
      </div>
      <div className="flex justify-center mt-2 mb-2">
        <PayButton id={id} />
      </div>
    </article>
  );
}

export default SingleProduct;
