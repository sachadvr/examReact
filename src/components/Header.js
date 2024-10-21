import {
    addToCartAtom,
    cartAtom,
    cartQuantityAtom,
    productsAtom,
    showAnimationCartState,
    totalPriceAtom,
    removeFromCartAtom
} from "../store";
import { useAtom } from "jotai";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [cart, _] = useAtom(cartAtom);
    const [showCartModal, setShowCartModal] = useState(false);
    const [showPopup] = useAtom(showAnimationCartState);
    const [totalPrice] = useAtom(totalPriceAtom);
    const [cartQuantity] = useAtom(cartQuantityAtom);
    const [, removeFromCart] = useAtom(removeFromCartAtom);

    return (
        <header className="bg-gray-800 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    Nook
                </Link>
                <ul className="flex space-x-4">
                    <li className="text-white cursor-pointer" onClick={() => setShowCartModal(true)}>
                        Panier ({cartQuantity})
                    </li>
                </ul>
            </nav>

            {showCartModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Your Cart</h2>
                        <ul>
                            {cart.map((item) => (
                                <>
                                <li key={item.id} className="mb-2">
                                    {item.name} - {item.quantity} x ${item.price}
                                </li>

                                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeFromCart(item.id)}>x</button>
                                </>
                            ))}
                        </ul>
                        <p className="text-xl font-bold mt-4">Total: ${totalPrice}</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            onClick={() => setShowCartModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showPopup && (
                <div className="fixed top-10 right-10 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    Added to cart!
                </div>
            )}

        </header>
    );
};

export default Header;
