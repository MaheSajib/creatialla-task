import React, { useState } from 'react';
import { ButtonGroup, Card, Dropdown } from 'react-bootstrap';
import './ProductsCard.css';

const ProductsCard = ({ pd }) => {

    const [size, setSize] = useState('')

    const handleSize = (e) => {
        switch (e) {
            case 'small': 
            setSize("20"); 
            break;
            case 'medium': 
            setSize("30"); 
            break;
            case 'large': 
            setSize("40"); 
            break;
            default : 
            setSize("20");
        }
    }

    return (
        <Card className="m-3 mb-5 mx-auto text-center productCard" style={{ width: '18rem' }}>
            <Card.Body className="">
                <Card.Title style={{fontSize: `${size.length > 0 ? size : pd.size }px`}}>{pd.face}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${pd.price}</Card.Subtitle>
                <Dropdown className="mx-2 btn-sm" as={ButtonGroup} onSelect={handleSize}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Size
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="drop" >
                        <Dropdown.Item eventKey="small">Small</Dropdown.Item>
                        <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
                        <Dropdown.Item eventKey="large">Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <br />
                <Card.Link className="text-decoration-none" href="#">Buy Now</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProductsCard;