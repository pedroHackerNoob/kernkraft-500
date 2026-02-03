"use server"
import {ErrorResponseSchema, ProductFormSchema} from "@/src/schema";

type ActionStateType = {
    errors: string[]
    successs: string

}
export async function addProduct(prevState: ActionStateType, formData: FormData) {
    console.log('addproduct')

    const product = ProductFormSchema.safeParse({
        name : formData.get('name'),
        price : formData.get('price'),
        stock: formData.get('stock'),
        categoryId: formData.get('categoryId'),
    })

    if (!product.success) {
        return {
            errors: product.error.issues.map(iss => iss.message),
            succes:''
        }
    }

    const url = `${process.env.API_URL}/products`
    const request = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.data)
    })
    const json = await request.json()

    if (!request.ok) {
        const errors = ErrorResponseSchema.parse(json)
        return {
            errors: errors.message.map(issue => issue),
            succes:''
        }
    }
    return {
        errors: [],
        success: 'Producto adicionado com sucesso',
    }
}