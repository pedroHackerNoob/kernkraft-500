import {Product} from "@/src/schema";
import {formatCurrency} from "@/src/utils";
import Image from "next/image";
import AddProductButton from "@/components/products/AddProductButton";

export default function ProductCard({product}: { product: Product}) {
    return (
        <div
            className='rounded bg-white shadow relative p-5'
        >
            <div>
                <Image
                    src={`${process.env.API_URL}/img/${product.image}`}
                    alt={`imagen de ${product.name}`}
                    width={400}
                    height={600}
                    unoptimized={true}
                />
                <div className="p-3 space-y-2">
                    <h3 className="text-xl font-bold text-gray-600">{product.name}</h3>
                    <p className="text-gray-500">Disponibles: {product.stock}</p>
                    <p className="text-2xl font-extrabold  text-gray-900">{formatCurrency(product.price)}</p>
                </div>
            </div>
            <AddProductButton product={product}/>
        </div>
    )
}