import { useParams } from "react-router-dom"



export const ProductDetails = ({ products }) => {

    const { id } = useParams()

    const myProduct = products.filter(product => product.id == id)[0]

    return (
        <h1>hello from product {myProduct.id}</h1>
    )
}