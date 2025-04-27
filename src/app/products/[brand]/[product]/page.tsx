import { staticShoes } from "@/data/staticShoes";
import ProductDetailClient from "./ProductDetailClient";
import { Suspense } from "react";
import { Metadata } from "next";
import { Shoe } from "@/components/ShoesCard";

interface PageProps {
  params: {
    brand: string;
    product: string;
  };
}

// This works fine — no need to change this part
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const productData = staticShoes.find(
    shoe =>
      shoe.brand.toLowerCase().replace(/\s+/g, "-") === params.brand &&
      shoe.name.toLowerCase().replace(/\s+/g, "-") === params.product
  );

  return {
    title: productData ? `${productData.name} - ${productData.brand}` : "Product Not Found",
    description: productData?.description || "Product not found",
  };
}

// ✅ Use `async` and add return type to the function
// Use inline type for params
export default function ProductDetail({ params }: { params: { brand: string; product: string } }) {
  const { brand, product } = params;

  const productData = staticShoes.find(
    shoe =>
      shoe.brand.toLowerCase().replace(/\s+/g, "-") === brand &&
      shoe.name.toLowerCase().replace(/\s+/g, "-") === product
  ) as Shoe | undefined;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailClient product={productData} />
    </Suspense>
  );
}
