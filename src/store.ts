import {create} from "zustand";
import {Product} from "@/src/schema";

interface Store {
    total: number
    addtoCart: (product: Product) => void
}

export const useStore = create<Store>(()=>({
    total: 0,
    addtoCart: (product) => {
        console.log('add to cart: \n', product)
    }
}))