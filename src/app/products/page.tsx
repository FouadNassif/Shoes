import { shoes } from "@/data/staticShoes";
import ProductsClient from "./ProductsClient";

export default function Products() {
    return <ProductsClient shoes={shoes} />;
}
