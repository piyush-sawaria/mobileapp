import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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
        let order:any = {};
        order.customer = window.sessionStorage.getItem("user");
        order.items = state.products;
        order.order_date = new Date();

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("Order Placed!!!");
            dispatch({ type: 'CLEAR_CART'});
            navigate("/");
        });
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