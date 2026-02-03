"use server"
import {ProductFormSchema} from "@/src/schema";

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
    return {
        errors: [],
        successs: [],
    }
}