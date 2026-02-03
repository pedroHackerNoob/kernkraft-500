"use client"

export default function AddProductForm() {
    return (
        <form>
            <input type={"submit"}
            className={"rounded bg-green-400 font-bold py-2 w-full cursor-pointer"}
                   value={"Agregar Producto"}
            />
        </form>
    )
}