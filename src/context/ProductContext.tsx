import axios from "axios"
import { createContext, useEffect, useState } from "react"
import Product from "../model/Product"

type ContextType = {
    products: Product[]
}
const ProductContext = createContext<ContextType>({
    products: []
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

    return <div>
        <ProductContext.Provider value={{ products }}>
            {props.children}
        </ProductContext.Provider>
    </div>
}

export { ProductContext }