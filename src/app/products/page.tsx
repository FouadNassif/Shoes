import { staticShoes } from "@/data/staticShoes";
import ProductsClient from "./ProductsClient";
import { Suspense } from "react";

export default function Products() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsClient shoes={staticShoes} />
        </Suspense>
    );
}
