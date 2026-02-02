import Heading from "@/components/UI/Heading";
import {ProductResponseSchema} from "@/src/schema";
import ProductsTable from "@/components/products/ProductsTable";
async function getProducts(){
    const url = `${process.env.API_URL}/products`;
    const req = await fetch(url)
    const json = await req.json()
    const data = ProductResponseSchema.parse(json)

    return {products: data.products, total: data.products.length};
}

export default async function ProductsPage() {
    const {products, total} =await getProducts()
    return (
        <>
            <Heading>Administrar Productos</Heading>
            <ProductsTable
                products = {products}
            />
        </>
    )
}