import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {Coupon, CouponResponseSchema, Product, ShoppingCart} from "@/src/schema";

interface Store {
    total: number
    contents: ShoppingCart
    coupon : Coupon
    addtoCart: (product: Product) => void
    updateStock: (id: Product['id'], quantity: number) => void
    clearCart: (id: Product['id']) => void
    calculateTotal: () => void
    applyCoupon: (couponName: string) => Promise<void>
}

export const useStore = create<Store>()(devtools((set,get)=>({
    total: 0,
    contents: [],
    coupon: {
        name: '',
        discount: 0,
        message: ''
    },
    addtoCart: (product) => {
        const {id: productId, category,...data}= product
        let contents: ShoppingCart =[]
        const duplicate = get().contents.findIndex(item => item.productId === productId)
        if(duplicate >=0){
            if (get().contents[duplicate].quantity >= get().contents[duplicate].stock) return alert(
                `El producto ${product.name} no puede ser agregado, ya se encuentra agregado en el carrito`
            )
            contents = get().contents.map(item => item.productId === productId ? {...item, quantity: item.quantity + 1} : item)
        }else{
            contents = [...get().contents, {
                ...data,
                quantity: 1,
                productId,
            }]
        }
        set(()=> ({contents}))
        get().calculateTotal()
    },
    updateStock: (id, quantity) => {
        const contents = get().contents.map(item => item.productId === id ? {...item, quantity} : item)
        set(()=> ({contents}))
        get().calculateTotal()
    },
    clearCart: (id) => {
        set((state)=> ({
            contents: state.contents.filter(item => item.productId !== id)
        }))
        get().calculateTotal()
    },
    calculateTotal: () =>{
        const total = get().contents.reduce((total, item) => total + (item.price * item.quantity), 0)
        set(()=> ({total}))
    },
    applyCoupon: async (couponName) => {
        try {
            const req = await fetch('/coupons/api', {
                method: 'POST',
                body: JSON.stringify({ coupon_name: couponName })
            });

            const json = await req.json();
            const result = CouponResponseSchema.safeParse(json);

            if (result.success) {
                set({ coupon: result.data });
            }else {
                set({ coupon: result.data });
            }
        } catch (e) {
            console.error('Error al aplicar cupón:', e);
        }
    },
})))