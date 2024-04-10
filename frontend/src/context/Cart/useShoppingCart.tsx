import { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext";


export default function useShoppingCart() {
    return useContext(ShoppingCartContext);
}