import Header from "./Header";
import Footer from "./Footer";
import {PropsWithChildren} from "react";

const Layout = ({children,}: PropsWithChildren<any>) => {
return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;