import {
    addToCartAtom,
    cartAtom,
    cartQuantityAtom,
    showAnimationCartState,
    totalPriceAtom,
    removeFromCartAtom, showCartModalAtom
} from "../store";
import { useAtom } from "jotai";
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

const Panier = ({ displayMode = "full" }) => {
    const navigate = useNavigate();
    const [cart] = useAtom(cartAtom);
    const [showPopup] = useAtom(showAnimationCartState);
    const [totalPrice] = useAtom(totalPriceAtom);
    const [cartQuantity] = useAtom(cartQuantityAtom);
    const [, removeFromCart] = useAtom(removeFromCartAtom);
    const [showCartModal, setShowCartModal] = useAtom(showCartModalAtom);

    return (
        <>
            {(displayMode === "notification" || showPopup) && (
                <div className="fixed top-10 right-10 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    Added to cart!
                </div>
            )}

            {(displayMode === "full" || displayMode === "popup") && (
                <div className={displayMode === "popup" ? "fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center" : ""}>
                    <div className="bg-white text-black p-4 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Your Cart</h2>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="mb-2">
                                    {displayMode === "full" && (
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                                    )}
                                    {item.name} - {item.quantity} x ${item.price}
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        x
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-bold mt-4">Total: ${totalPrice}</p>

                        {displayMode === "popup" && cart.length !== 0 && (
                            <Link to={'/cart'}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                                    Go to Cart
                                </button>
                            </Link>
                        )}

                        {displayMode === "popup" && (
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                onClick={() => setShowCartModal(false)}
                            >
                                Close
                            </button>
                        )}

                        {displayMode === "full" && (
                            <>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                                    onClick={() => navigate(-1)}
                                >
                                    Continue Shopping
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                    onClick={() => alert('Checkout not implemented')}
                                >
                                    Checkout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Panier;
