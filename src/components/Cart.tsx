import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button, Container } from "react-bootstrap";
import CartList from "./CartList";

export default function Cart() {
    let { checkout, cart } = useContext(CartContext);
    return <Container>
        {
            cart.map(product => <CartList product={product} key={product.id} />)
        }
        <div className="row">
            <div className="col-md-10">
            </div>
            <div className="col-md-2">
                <Button onClick={() => checkout()}>Checkout</Button>
            </div>
        </div>
    </Container>
}