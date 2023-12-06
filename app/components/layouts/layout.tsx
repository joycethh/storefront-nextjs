import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({children,}: {children: ReactNode}) => {
return(
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
)
}

export default Layout;