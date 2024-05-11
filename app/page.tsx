import Rating from "@/components/Rating";

export default async function page() {
  const url =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  return (
    <main>
      <header className="mt-4">
        <h1 className="text-center  text-7xl font-semibold">Product Store</h1>
      </header>
      <main className="flex items-center justify-center mt-10">
        <article className="mt-10 rounded-xl max-w-md px-5  border-zinc-100 border-2 mb-10 shadow-lg">
          <div className="flex items-center justify-center">
            <img
              src={url}
              alt="product-image"
              className="h-72 w-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-400 text-wrap">
              Mens Casual Premium Slim Fit T-Shirts{" "}
            </h3>
            <div className="flex items-center justify-between mt-5">
              <span className="font-bold text-3xl text-gray-600">$400</span>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary inline-block"></span>
                <span className="text-primary">In stock</span>
              </div>
            </div>
            <p className="mt-5 text-wrap tracking-wide text-slate-400">
              Slim-fitting style, contrast raglan long sleeve, three-button
              henley placket, light weight & soft fabric for breathable and
              comfortable wearing. And Solid stitched shirts with round neck
              made for durability and a great fit for casual fashion wear and
              diehard baseball fans. The Henley style round neckline includes a
              three-button placket.
            </p>
          </div>
          <div className="flex items-center mt-2">
            <Rating ratingNumber={4.5} />
            <span>(6 Reviews)</span>
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <button className="bg-primary text-white px-4 py-2 text-2xl font-semibold hover:bg-secondary transition-all duration-200">
              Purchase Now
            </button>
          </div>
        </article>
      </main>
    </main>
  );
}
