import { StaticImageData } from "next/image";
import  Image from "next/image";

export interface IProduct {
    id: string,
    name: string,
    price: number,
    url: string,
    description: string,
    image: StaticImageData
}

interface IProductProps {
    product: IProduct
}

const Product = (props: IProductProps) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            {/* image */}
            <div>
                <Image src={props.product.image} alt={props.product.name} className="w-16 md:w-32 lg:w-48"  />
            </div>
            {/* price */}
            <div>
            <div>${props.product.price.toFixed(2)}</div>
                <button
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.product.url}
                    data-item-image={props.product.image.src}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product;