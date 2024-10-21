import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
import {addToCartAtom, productsAtom} from "../store";
import {useAtom} from "jotai";

const ProductDetail = () => {
    const { id } = useParams();

    const [products, _] = useAtom(productsAtom);
    const [, addToCart] = useAtom(addToCartAtom);

    if (!products) {
        return null;
    }
    const product = products.find((product) => product.id === parseInt(id));

    return (
        <Layout>
            <h1>Product Detail</h1>
            <p>Product ID: {product.id}</p>
        </Layout>
    )
}

export default ProductDetail;