import {addToCartAtom, cartAtom, productsAtom} from "../store";
import {useAtom} from "jotai";

const Header = () => {
    const [cart, _] = useAtom(cartAtom);

    return (
<header className="bg-gray-800 p-4">
    <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
            E-Commerce
        </div>
        <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Shop</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>

            <li className="text-white">Panier</li>
        </ul>
    </nav>
</header>
    );
}

export default Header;