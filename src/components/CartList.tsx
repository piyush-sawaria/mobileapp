import { Button } from "react-bootstrap";
import Cart from "../model/Cart"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

type PropsType = {
    product: Cart
}
export default function CartList(props: PropsType) {
    let { id, name, image, price, quantity, amount } = props.product;
    let {increment} = useContext(CartContext);
    return <div className="row">
        <div className="col-md-2">
            <img src={image} width="80px" />
        </div>
        <div className="col-md-2">
            {name}
        </div>
        <div className="col-md-4">
            <Button>-</Button>
            &nbsp;
            {quantity}
            &nbsp;
            <Button onClick={() => increment(id)}>+</Button>
        </div>
        <div className="col-md-2">
            Price : {price}
        </div>
        <div className="col-md-2">
            Amount: {amount}
        </div>
    </div>
}