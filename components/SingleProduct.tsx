import { Product } from "@/lib/server";
import Rating from "./Rating";
import PayButton from "./PayButton";
import Batch from "./Batch";
import Image from "next/image";

function SingleProduct({
  id,
  title,
  description,
  image,
  rating,
  price,
}: Product) {
  return (
    <article className="mt-10 rounded-xl max-w-md px-5  border-zinc-100 border-2 mb-10 shadow-lg relative">
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          height={288}
          width={320}
          className="object-cover"
        />
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
      <Batch />
      <div className="flex items-center mt-2">
        <Rating ratingNumber={rating.rate} />
        <span className="ml-4">({rating.count} Reviews)</span>
      </div>
      <div className="flex justify-center mt-2 mb-5">
        <PayButton id={id} />
      </div>
    </article>
  );
}

export default SingleProduct;
