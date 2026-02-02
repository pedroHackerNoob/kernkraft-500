import {TransactionsResponseSchema} from "@/src/schema";

export async function getSalesByDate(date: string){
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/admin/sales/api?transactionDate=${date}`;
    const req = await fetch(url);
    if (!req.ok) throw new Error('Error en la petición');
    const json = await req.json();
    const transactions = TransactionsResponseSchema.safeParse(json);
    return transactions.data;
}