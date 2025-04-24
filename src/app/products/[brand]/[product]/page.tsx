import { shoes } from "@/data/staticShoes";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetail({ params }: { params: { brand: string; product: string } }) {
    const { brand, product } = params;
    
    // Find the product in the shoes array
    const productData = shoes.find(
        shoe => 
            shoe.brand.toLowerCase().replace(/\s+/g, '-') === brand &&
            shoe.name.toLowerCase().replace(/\s+/g, '-') === product
    );

    return <ProductDetailClient product={productData} />;
} 