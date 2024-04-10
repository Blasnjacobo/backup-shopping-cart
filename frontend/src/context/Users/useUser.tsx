import { useContext } from "react";
import userContext from "./userContext";

export default function useShoppingCart() {
    return useContext(userContext);
}