import Link from "next/link";

function page() {
  return (
    <main className="max-w-screen-xl mx-auto mt-5">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img
            src="/success.jpg"
            className="h-96 w-96"
            alt="payment success fully done"
          />
        </div>
        <h3 className="text-3xl font-semibold mt-5">
          Thank You For Your Purchasing !
        </h3>
        <p className="text-lg text-slate-400 mb-5">
          You have successfully purchase your product.We wil send you an email
          about purchase invoice.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-4 py-2 text-2xl font-semibold hover:bg-secondary transition-all duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

export default page;
