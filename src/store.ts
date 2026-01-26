import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {Product, ShoppingCart} from "@/src/schema";

interface Store {
    total: number
    contents: ShoppingCart
    addtoCart: (product: Product) => void
}

export const useStore = create<Store>()(devtools((set,get)=>({
    total: 0,
    contents: [],
    addtoCart: (product) => {
        console.log('add to cart: \n', product)
    }
})))