import {Product} from "@/src/schema";
import {revalidatePath} from "next/cache";

export default function DeleteProduct({productId}: {productId: Product['id']}) {
    const handleDeleteProduct = async () => {
        "use server"
        const url = `${process.env.API_URL}/products/${productId}`
        const request = await fetch(url, {
            method: "DELETE",

        })
        await request.json()
        revalidatePath('/admin/products');
    }

    return (
        <form
        action={handleDeleteProduct}>
            <input type="submit" className={"text-red-600 hover:accent-red-800 cursor-pointer"}
                   value='eliminar'
            />
        </form>
    )
}