import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Product = ({ product: { title, description, image, id } }) => {
    return (
        <div className='col-md-4 col-lg-3' >
            <Card className='h-100' >
                <Card.Img variant="top" src={image} className="cardImage" />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='flex-grow description-height'>
                        {description}
                    </Card.Text>
                    <NavLink className="text-light btn btn-success" to={`products/${id}`}>see details</NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product;