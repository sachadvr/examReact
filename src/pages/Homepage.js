import Layout from "../components/Layout";
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { productsAtom, addToCartAtom } from '../store';
import {useFetch} from "../hooks/useFetch";
import Image from '../icone.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {
    const { data: products, loading, error } = useFetch('/products');
    const [, setProducts] = useAtom(productsAtom);
    const [, addToCart] = useAtom(addToCartAtom);
    const [genderFilter, setGenderFilter] = useState(null);
    const filteredProducts = genderFilter ? products.filter(product => product.gender === genderFilter) : products;

    useEffect(() => {
        if (products) {
            setProducts(products);
        }
    }, [products, setProducts]);

    return (
        <Layout>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="flex justify-between w-full mb-4">
                    <button className="p-2 flex-1 bg-black text-white mr-2" onClick={() => setGenderFilter('M')}>Chaussures pour Hommes</button>
                    <button className="p-2 flex-1 bg-black text-white" onClick={() => setGenderFilter('F')}>Chaussures pour Femmes</button>
            </div>
            <ul className="flex flex-col md:grid md:grid-cols-4 gap-3">
                {filteredProducts && filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <li key={product.id} className="p-2">
                            <img src={product.image} alt="icone"/>
                            <h2 className="text-2xl uppercase font-bold">{product.name}</h2>
                            <p className="text-gray-400 ellipsis">{product.description}</p>
                            <p className="text-2xl">${product.price}</p>
                            <button className="p-2 bg-black text-white" onClick={(event) => {
                                event.preventDefault();
                                addToCart(product)
                            }}>Add to Cart</button>
                        </li>
                    </Link>
                ))}
            </ul>
        </Layout>
    )
}

export default Homepage;