"use client";
import { useRouter } from "next/navigation";

function PayButton() {
  const router = useRouter();

  async function createCheckout() {
    router.push("/payment");
  }
  return (
    <button
      onClick={createCheckout}
      className="bg-primary text-white px-4 py-2 text-2xl font-semibold hover:bg-secondary transition-all duration-200"
    >
      Purchase Now
    </button>
  );
}

export default PayButton;
