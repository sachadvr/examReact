import Layout from "../components/Layout";
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { productsAtom, addToCartAtom } from '../store';
import {useFetch} from "../hooks/useFetch";



const Homepage = () => {
    const { data: products, loading, error } = useFetch('/products');
    const [, setProducts] = useAtom(productsAtom);
    const [, addToCart] = useAtom(addToCartAtom);

    useEffect(() => {
        if (products) {
            setProducts(products);
        }
    }, [products, setProducts]);

    return (
        <Layout>
            <h1>Homepage</h1>
        </Layout>
    )
}

export default Homepage;