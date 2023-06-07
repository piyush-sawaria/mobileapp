import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "../model/Product"
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    product: Product
}
export default function ProductCard(props: PropsType) {
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
                <FontAwesomeIcon icon={faShoppingCart} color="blue" />
            </div>
        </div>
    </div>
}