import { IProduct } from "./Product";
import round from "../../../public/images/round-dark.jpg"
import pearl from "../../../public/images/pear.jpg"
import { GetStaticProps } from "next";
export const products: IProduct[] = [
    {
        id: "round-lab-grown-diamond-ring",
        name: "1.00ct Round Lab-grown Diamond Ring",
        price: 2099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation Solitaire (Six Prong), 1.01 Carat K-SI2 Very Good Cut Round Diamond',
        image:round,
    },
    {
        id: "round-lab-grown-diamond-ring",
        name: "2.00ct Pearl Lab-grown Diamond Ring",
        price: 4099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:pearl,
    }
]

export const getStaticProps: GetStaticProps = async(context) => {
    return{
        props: {
            props: {
                products
            }
        }
    }
}