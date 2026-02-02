import {Transaction} from "@/src/schema";

export default function TransactionSummary({transaction} : {transaction: Transaction}) {


    return (
        <>
            <div className='mt-6  text-sm font-medium text-gray-500 border border-gray-200'>
                <p className='text-sm font-black text-gray-900 p-2 bg-gray-200 '>ID: {transaction.id} </p>
                <ul
                    role="list"
                    className="divide-y divide-gray-200 border-t border-gray-200 border-b"
                >
                    {transaction.contents.map((item) => (
                        <li className="p-5" key={item.id}>
                            <div className='flex items-center space-x-6 '>
                                <div className='relative w-32 h-32'>

                                </div>
                                <div className="flex-auto space-y-1 ">
                                    <h3 className="text-gray-900">
                                    </h3>
                                    <p className="text-lg font-extrabold  text-gray-900"></p>
                                    <p className="text-lg  text-gray-900">Cantidad: </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <dl className="space-y-6  text-sm font-medium text-gray-500 p-5">

                    <div className="flex justify-between">
                        <dt>Cupón Utilizado</dt>
                        <dd className="text-gray-900"></dd>
                    </div>

                    <div className="flex justify-between">
                        <dt>Descuento</dt>
                        <dd className="text-gray-900">-</dd>
                    </div>

                    <div className="flex justify-between">
                        <dt className="text-lg text-black font-black">Total</dt>
                        <dd className="text-lg text-black font-black"></dd>
                    </div>
                </dl>
            </div>
        </>
    )
}