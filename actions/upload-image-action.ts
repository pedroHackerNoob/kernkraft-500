"use server"

export async function uploadImage(formData:FormData) {
    const url = `${process.env.API_URL}/products/upload-image`
    const req = await fetch(url, {
        method: 'POST',
        body: formData
    })
    return await req.json()
}