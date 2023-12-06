import type { AppProps } from 'next/app';
import Layout from '../app/components/layouts/Layout';
import "../styles/globals.css"

//define global layout;
const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </>
    )  
}

export default App;