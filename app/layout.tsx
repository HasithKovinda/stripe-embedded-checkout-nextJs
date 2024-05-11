import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Store",
  description: "Stripe embedded checkout demo project",
};

const lora = Lora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className}`}>{children}</body>
    </html>
  );
}

("success");
