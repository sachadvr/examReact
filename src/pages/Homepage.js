import Layout from "../components/Layout";
import { useAtom } from 'jotai';
import { addToCartAtom, productsAtom } from '../store';
import Image from '../icone.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {
    const [products] = useAtom(productsAtom);
    const [, addToCart] = useAtom(addToCartAtom);
    const [genderFilter, setGenderFilter] = useState(null);
    const filteredProducts = genderFilter ? products.filter(product => product.gender === genderFilter) : products;

    return (
        <Layout>
            <div className="flex justify-between w-full mb-4">
                <button className="p-2 flex-1 bg-black text-white mr-2" onClick={() => setGenderFilter('M')}>Chaussures pour Hommes</button>
                <button className="p-2 flex-1 bg-black text-white" onClick={() => setGenderFilter('F')}>Chaussures pour Femmes</button>
            </div>
            <ul className="flex flex-col md:grid md:grid-cols-4 gap-3">
                {filteredProducts && filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <li className="p-2">
                            <img src={product.image} alt="icone" className="w-full aspect-square object-contain"/>
                            <h2 className="text-2xl uppercase font-bold">{product.name}</h2>
                            <p className="text-gray-400 ellipsis">{product.description}</p>
                            <p className="text-2xl">${product.price}</p>
                            <button className="p-2 bg-black text-white" onClick={(event) => {
                                event.preventDefault();
                                addToCart(product);
                            }}>Add to Cart</button>
                        </li>
                    </Link>
                ))}
            </ul>
        </Layout>
    );
}

export default Homepage;
