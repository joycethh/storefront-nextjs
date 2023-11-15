import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";



const Header = () => {
    return(
        <>
        <header className="z-10 py-10 text-violet-950"> 
            <nav className="container flex items-center justify-between">
                {/* logo section */}
                <div>
                    <Link href='/' className="text-2xl font-bold capitalize tracking-tight hover:tracking-wide">
                        Bling Biling Bijoux
                    </Link>
                </div>
                {/* nav items */}
                <ul className="flex items-center gap-10">
                    <li className="text-sm font-medium uppercase tracking-tight hover:tracking-wide">Rings</li>
                    <li className="text-sm font-medium uppercase tracking-tight hover:tracking-wide">Necklace</li>
                    <li className="text-sm font-medium uppercase tracking-tight hover:tracking-wide">Earrings</li>

                   
                </ul>
               
                <div>
                <ul className="flex items-center gap-5">
                     {/* sign in  */}
                     <li>
                        <Link href="/signin"> <GoPerson className="h-7 w-7"/></Link>
                    </li>

                     {/* shopping cart */}
                    <li>
                        <LiaShoppingBagSolid className="h-7 w-7"/>
                    </li>
                      
                    </ul>
                </div>

            </nav>

        </header>
        </>
    )
}

export default Header;
