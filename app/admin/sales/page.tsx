import Heading from "@/components/UI/Heading";
import TransactionFilter from "@/components/transactions/TransactionFilter";

export default function SalesPage() {
    return(
        <>
            <Heading>ventas</Heading>
            <p className=" text-lg"> En esta seccion podras ver las ventas utilizando el calendario para filtrar por fecha</p>
            <TransactionFilter/>
        </>
    )
}