import { createContext, useContext, useReducer } from "react";
import Cart from "../model/Cart";
import CartReducer from "./CartReducer";
import { ProductContext } from "./ProductContext";

type ContextType = {
    cart: Cart[],
    addToCart: (id: number) => void,
    increment: (id: number) => void,
    decrement: (id: number) => void,
    checkout: () => void
}
export const CartContext = createContext<ContextType>({
    cart: [],
    addToCart: (id: number) => { },
    increment: (id: number) => { },
    decrement: (id: number) => { },
    checkout: () => { }
});
const initialState = {
    products: [],
    total: 0
}
type PropsType = {
    children: React.ReactNode
}
export default function CartProvider(props: PropsType) {
    let [state, dispatch] = useReducer(CartReducer, initialState);
    let { products } = useContext(ProductContext);

    // from UI we pass id of product to add to cart
    function addToCart(id: number) {
        let prd = products.find(p => p.id === id)!;
        let item = {
            id: prd.id,
            name: prd.productName,
            image: prd.productImageUrl,
            price: prd.productPrice,
            quantity: 1,
            amount: prd.productPrice
        }
        dispatch({ type: 'ADD_TO_CART', payload: item });
    }

    function increment(id: number) {
        dispatch({ type: "INCREMENT", payload: id });
    }

    function decrement(id: number) {
        dispatch({ type: "DECREMENT", payload: id });
    }

    function checkout() {

    }

    return <CartContext.Provider value={{
        cart: state.products,
        addToCart,
        increment,
        decrement,
        checkout
    }}>
        {props.children}
    </CartContext.Provider>
}