import { shoes } from "@/data/staticShoes";
import ProductDetailClient from "./ProductDetailClient";
import { Metadata } from "next";
import { type MetadataParams } from "next";

interface PageProps {
  params: {
    brand: string;
    product: string;
  };
}

// This works fine — no need to change this part
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const productData = shoes.find(
    shoe =>
      shoe.brand.toLowerCase().replace(/\s+/g, "-") === params.brand &&
      shoe.name.toLowerCase().replace(/\s+/g, "-") === params.product
  );

  return {
    title: productData ? productData.name : "Product Not Found",
  };
}

// ✅ Use `async` and add return type to the function
export default async function ProductDetail({ params }: PageProps) {
  const { brand, product } = params;

  const productData = shoes.find(
    shoe =>
      shoe.brand.toLowerCase().replace(/\s+/g, "-") === brand &&
      shoe.name.toLowerCase().replace(/\s+/g, "-") === product
  );

  return <ProductDetailClient product={productData} />;
}
