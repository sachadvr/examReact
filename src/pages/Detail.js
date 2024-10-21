import { useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { addToCartAtom } from '../store';
import Layout from '../components/Layout';
import defaultImage from '../icone.webp';
import { useFetch } from "../hooks/useFetch";

const ProductDetail = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`/api/products/${id}`);
    const [, addToCart] = useAtom(addToCartAtom);

    if (loading) {
        return (
            <Layout>
                <p>Loading product details...</p>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <p>Error: {error.message}</p>
            </Layout>
        );
    }

    if (!product) {
        return (
            <Layout>
                <p>No product found.</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex max-md:flex-col gap-5 mt-12 p-5">
                <div className="flex-1">
                    <img
                        src={product.image ? product.image : defaultImage}
                        alt={product.name} className="w-full aspect-square object-contain"
                    />
                </div>
                <div className="flex-1 place-items-center flex">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <h1 className="text-4xl font-bold mb-4">{product.gender === 'M' ? 'For men' : 'For women'}</h1>
                        <p className="text-lg mb-4">{product.description}</p>
                        <div className="flex items-center mb-6">
                            <p className="text-3xl font-bold mr-4">${product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
