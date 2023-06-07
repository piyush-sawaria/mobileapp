import Cart from "../model/Cart"

type CartType = {
    products: Cart[],
    total: number
}
type ActionType = {
    type: "ADD_TO_CART",
    payload: Cart
} | { type: "INCREMENT", payload: number }
    | { type: "DECREMENT", payload: number }
    | { type: "CLEAR_CART" }

export default function CartReducer(state: CartType, action: ActionType) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = { ...action.payload }
            let items = state.products;
            let total = state.total + product.amount;
            return { products: [...items, product], total }
        case 'INCREMENT':
            let products = state.products;
            products.forEach(p => {
                if (p.id === action.payload) {
                    p.quantity++;
                    p.amount = p.price * p.quantity
                }
            });
            // update total
            let totalAmt = products.map(p => p.amount).reduce((v1, v2) => v1 + v2);
            return { products, total: totalAmt }
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return { products: [], total: 0.0 }
        default: return state;
    }
}