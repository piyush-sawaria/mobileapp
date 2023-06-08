import axios from "axios"
import { createContext, useEffect, useState } from "react"
import Product from "../model/Product"

type ContextType = {
    products: Product[],
    addProduct: (product:Product) => void
}
const ProductContext = createContext<ContextType>({
    products: [],
    addProduct: (product:Product) => {}
})

type PropsType = {
    children: React.ReactNode
}

export default function ProductProvider(props: PropsType) {
    let [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        axios.get("http://localhost:1234/products")
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    function addProduct(product:Product) {
        //products.push(product);
        setProducts([...products, product]);
    }

    return <div>
        <ProductContext.Provider value={{ products, addProduct }}>
            {props.children}
        </ProductContext.Provider>
    </div>
}

export { ProductContext }