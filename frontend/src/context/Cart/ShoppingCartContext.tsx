import { createContext } from "react";

type CartItem = {
    perfumeID: string;
    quantity: number;
};

type ShoppingCart = {
    openCart: () => void;
    closeCart: () => void;
    itemQuantity: (_id: string, username: string) => Promise<number>;
    increaseQuantity: (_id: string, username: string) => Promise<number | undefined>;
    decreaseQuantity: (_id: string, username: string) => Promise<number | undefined>;
    removeFromCart: (_id: string, username: string) => Promise<number | undefined>;
    cartItems: (username: string) => Promise<CartItem[]>;
    quantity: number
};

const ShoppingCartContext = createContext({} as ShoppingCart);
export default ShoppingCartContext;
