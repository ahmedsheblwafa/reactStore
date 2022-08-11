import { createContext, useEffect, useState } from "react";
import { getProducts } from "../API/Products";

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(res => { console.log(res.data); setProducts(res.data) })
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

