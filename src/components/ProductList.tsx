import { useContext } from "react";
import { Container } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import ProductCart from "./ProductCard";

export default function ProductList() {
    let {products} = useContext(ProductContext)
    return <Container>
        <div className="row">
            {products.map(p => <ProductCart product={p} key={p.id} />)}
        </div>
    </Container>
}