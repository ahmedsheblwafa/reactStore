import { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ProductContext } from '../contexts/Productscontext';


export default function Productscarousel() {
    const products = useContext(ProductContext)

    return (
        <section className='' >


            <Carousel  >
                {products.map(product => {
                    return (
                        <Carousel.Item interval={2000} className='carouselItem' key={product.id}>
                            <img
                                className="d-block w-100"
                                src={product.image}
                                alt="First slide"
                            />
                            <Carousel.Caption className='carouselCaption'>
                                <h3 className='display-3'>{product.price}</h3>
                                <p className='lead' >{product.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}
