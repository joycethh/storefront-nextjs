import { IProduct } from "./Product";
import roundGoldWave001 from "../../../public/images/round-gold-wave-001.jpg"
import pearlGold004 from "../../../public/images/pear-gold-004.jpg"
import roundWhiteWave005 from "../../../public/images/round-white-wave-005.jpg";
import roundWhiteWave006 from "../../../public/images/round-white-wave-006.jpg"
import roundWhite007 from "../../../public/images/round-white-007.jpg";
import roundGold008 from "../../../public/images/round-gold-008.jpg"
import roundWhite009 from "../../../public/images/round-white-009.jpg";
import roundGoldDouble010 from "../../../public/images/round-gold-double-010.jpg"
import squareWhiteDouble011 from "../../../public/images/square-white-double-011.jpg";
import squareColorBlueWhite012 from "../../../public/images/square-colorBlue-white-012.jpg"
import squareColorRedGold013 from "../../../public/images/square-colorRed-gold-013.jpg";
import squareWhite015 from "../../../public/images/square-white-015.jpg"
import { GetStaticProps } from "next";
export const productsData: IProduct[] = [
    {
        id: "round-gold-wave-001",
        name: "1.00ct Round Lab-grown Diamond Ring",
        price: 2099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation Solitaire (Six Prong), 1.01 Carat K-SI2 Very Good Cut Round Diamond',
        image:roundGoldWave001,
    },
    {
        id: "pearl-gold-004",
        name: "2.00ct Pearl Lab-grown Diamond Ring",
        price: 4099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:pearlGold004,
    },
    {
        id: "round-white-wave-005",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 2000,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundWhiteWave005,
    },
    {
        id: "round-white-wave-006",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 6099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundWhiteWave006,
    },
    {
        id: "round-white-007",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 3099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundWhite007,
    },
    {
        id: "round-gold-008",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 1099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundGold008,
    },
    {
        id: "round-white-009",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 4099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundWhite009,
    },
    {
        id: "round-gold-double-010",
        name: "2.00ct Round Lab-grown Diamond Ring",
        price: 6099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:roundGoldDouble010,
    },
    {
        id: "square-white-double-011",
        name: "2.00ct Sqaure Lab-grown Diamond Ring",
        price: 1099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:squareWhiteDouble011, 
    },
    {
        id: "square-colorBlue-white-012",
        name: "2.00ct Square Lab-grown Diamond Ring",
        price: 4099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:squareColorBlueWhite012,
    },
    {
        id: "square-colorRed-gold-013",
        name: "2.00ct Square Lab-grown Diamond Ring",
        price: 6099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:squareColorRedGold013,
    },
    {
        id: "square-white-015",
        name: "2.00ct Square Lab-grown Diamond Ring",
        price: 6099,
        url: '/api/products/round-lab-grown-diamond-ring',
        description:'14K White Gold Presentation, 1.00 Carat K-SI2 Very Good Cut Pearl Diamond',
        image:squareWhite015,
    },
]

export const getStaticProps: GetStaticProps = async(context) => {
    return{
        props: {
            props: {
                productsData
            }
        }
    }
}
