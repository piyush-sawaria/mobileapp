import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "../model/Product"
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

type PropsType = {
    product: Product
}
function ProductCard(props: PropsType) {
    let {addToCart}  = useContext(CartContext);
    let { id, productName, productDescription, productImageUrl, productPrice } = props.product;
    return <div className="col-md-4 col-lg-3 my-2">
        <div className="card">
            <div className="card-img-top">
                <img src={productImageUrl} className="img-fluid" />
            </div>
            <div className="card-body">
                {productName} <br />
                {productDescription}
            </div>
            <div className="card-footer">
                Rupee {productPrice}
                <FontAwesomeIcon icon={faHeart} color="red" className="px-3" />
                <FontAwesomeIcon 
                    onClick={() => addToCart(id)}
                    icon={faShoppingCart} 
                    color="blue" />
            </div>
        </div>
    </div>
}

export default  ProductCard;