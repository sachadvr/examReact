import { atom } from 'jotai';

export const productsAtom = atom([]);

export const cartAtom = atom([]);

export const totalPriceAtom = atom((get) => {
    const cart = get(cartAtom);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
export const addToCartAtom = atom(
    null,
    (get, set, product) => {
        const cart = get(cartAtom);
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            set(cartAtom, cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            set(cartAtom, [...cart, { ...product, quantity: 1 }]);
        }
    }
);

export const removeFromCartAtom = atom(
    null,
    (get, set, productId) => {
        const cart = get(cartAtom);
        set(cartAtom, cart.filter((item) => item.id !== productId));
    }
);