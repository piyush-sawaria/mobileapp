import { useContext, useState } from "react"
import Product from "../model/Product";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
    const navigate = useNavigate();
    let { addProduct } = useContext(ProductContext);

    let [id, setId] = useState<number>(0);
    let [name, setName] = useState<string>("");
    let [price, setPrice] = useState<number>(0);

    function submit() {
        let product: Product = {
            id,
            productName: name,
            productPrice: price,
            productImageUrl: "/images/iphone-x-in-hand.jpg",
            productQuantity: 100
        }

        axios.post("http://localhost:1234/products", product).then(response => {
            console.log("Product added!!!");
            addProduct(product);
            navigate("/");
        });
    }
    return <div className="container">
        ID <input type="number" onChange={(evt: any) => setId(evt.target.value)} /> <br />
        Name <input type="text" onChange={(evt: any) => setName(evt.target.value)} /> <br />
        Price <input type="number" onChange={(evt: any) => setPrice(evt.target.value)} /> <br />
        <button type="button" onClick={() => submit()}>Add Product</button>
        </div>
}