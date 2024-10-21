import Header from "./Header";
import Footer from "./Footer";
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { productsAtom } from '../store'; // import productsAtom
import { useFetch } from "../hooks/useFetch";

const Layout = ({ children }) => {
    const { data: products, loading, error } = useFetch('/api/products');
    const [, setProducts] = useAtom(productsAtom);

    useEffect(() => {
        if (products) {
            setProducts(products);
        }
    }, [products, setProducts]);

    return (
        <>
            <Header />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {children}
            <Footer />
        </>
    );
}

export default Layout;
