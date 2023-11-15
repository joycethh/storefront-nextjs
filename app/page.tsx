import Image from "next/image";
import Link from "next/link";
import round from "../public/images/round-pale.jpg"
import pear from "../public/images/pear.jpg"
import oval from "../public/images/oval.jpg"

const Page = () =>{
    return (
        <section className="h-full">
            {/* top-section */}
            <div className="flex items-center shadow-md overflow-hidden ">
            {/* left */}
            <div className="items-center">
                <span>Timeless Rings</span>
                <p>Fine jewelry ready for shippment</p>
                <span> Shop by Shapes</span>
            </div>
            {/* right */}
            <div className="flex items-center">
            <div className="flex-none w-25 h-25" >
                <Image alt="" src={round} className="w-16 md:w-32 lg:w-48" />
                <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                <span>Shop Round</span>
                </Link>
            </div>
            <div className="flex-none w-25 h-25" >
                <Image alt="" src={oval} className="w-16 md:w-32 lg:w-48"  />
                <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                <span>Shop Oval</span>
                </Link>
            </div>
            <div className="flex-none w-25 h-25" >
                <Image alt="" src={pear} className="w-16 md:w-32 lg:w-48" />
                <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                <span>Shop Pear</span>
                </Link>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Page;