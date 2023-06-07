import { memo, useContext } from "react";
import { Container } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import ProductCart from "./ProductCard";

const MemoProductCard = memo(ProductCart)
export default function ProductList() {
    let {products} = useContext(ProductContext) // consumer of ProductContext
    return <Container>
        <div className="row">
            {products.map(p => <MemoProductCard product={p} key={p.id} />)}
        </div>
    </Container>
}