import React from "react";
import {formatDate} from '../../utils/helpers';

//Bootstrap Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const CardComponent = ({image, date, author, id}) =>{
const navigate = useNavigate()

const handleSubmit = () =>{
    navigate(`/questions/${id}`)
};


    return(
        <Card  style={{ width: '13rem' }}>
        <Card.Img variant="top" src={image} className="rounded me-2"  style={{ width: '12rem', textAlign: 'center' }}/>
        
        <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle>
        <p>{formatDate(date)}</p>
        </Card.Subtitle>
       
        <Button onClick={handleSubmit} className="btn">View Poll</Button>
      
    
        </Card.Body>
      
        </Card>
    )
}

export default CardComponent;