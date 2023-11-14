import { Inter } from "next/font/google";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import './globals.css';

const inter = Inter({subsets:['latin']})

export const metadata = {
  title: "Shell Splendor",
  description: 'Created by Joyce Tang'
}


const RootLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) =>{
    return (
      <html lang="en">
        <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
      </html>
    )
  }

  export default RootLayout;