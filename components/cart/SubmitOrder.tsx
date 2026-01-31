import {useActionState} from "react";
import {submitOrderAction} from "@/actions/submit-order-action";
import {useStore} from "@/src/store";

export default function SubmitOrder() {
    const coupon = useStore(state=> state.coupon.coupon?.name)
    const contents = useStore(state=> state.contents)
    const order= {coupon,contents}
    console.log('SubmitOrder:\n',order)
    const submitOrderWithData = submitOrderAction.bind(null,order)
    const [state, dispatch]= useActionState(submitOrderWithData,{
        errors:[],
        succes: '',
    })
    return(
        <form action={dispatch}>

            <input type="submit"
                   value="confirmar compra"
                   className=" mt-5 w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold hover:cursor-pointer"

            />
        </form>
    )
}