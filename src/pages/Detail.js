import { useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { productsAtom, addToCartAtom } from '../store';
import Layout from '../components/Layout';
import image from '../icone.webp'

const ProductDetail = () => {
    const { id } = useParams();
    const [products] = useAtom(productsAtom);
    const [, addToCart] = useAtom(addToCartAtom);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find((p) => p.id === parseInt(id));
            setProduct(foundProduct); 
        }
    }, [products, id]);

    if (!product) {
        return (
            <Layout>
                <p>Loading product details...</p>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex gap-5">
                {/* Image Section */}
                <div className="w-1/2">
                    <img src={product.image || image} alt={product.name} className="w-full" />
                </div>
                {/* Product Info Section */}
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg mb-4">{product.description}</p>
                    <div className="flex items-center mb-6">
                        <p className="text-3xl font-bold mr-4">${product.price}</p>
                        <button 
                            onClick={() => addToCart(product)} 
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
