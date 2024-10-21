import { useAtom } from "jotai";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Panier from "./Panier";
import {
    cartQuantityAtom,
    showAnimationCartState, showCartModalAtom,
} from "../store";

const Header = () => {
    const [showPopup] = useAtom(showAnimationCartState);
    const [cartQuantity] = useAtom(cartQuantityAtom);
    const [showCartModal, setShowCartModal] = useAtom(showCartModalAtom);

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
                        <Panier displayMode="popup" />
            )}

            {showPopup && (
                <div className="fixed top-10 right-10 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    <Panier displayMode="notification" />
                </div>
            )}

        </header>
    );
};

export default Header;
