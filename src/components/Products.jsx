import { useContext } from 'react';
import { ProductContext } from '../contexts/Productscontext';
import Product from './Product';
import "./products.css"

const Products = () => {
    const products = useContext(ProductContext)

    return (<>
        <div className='container' >
            <div className='row' >

                {products.map(product => {
                    return (<Product product={product} key={product.id} />)
                })}
            </div>
        </div>
    </>)
}
export default Products;