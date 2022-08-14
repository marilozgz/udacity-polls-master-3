import React, {useState} from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import  {PollsUnanswered} from "./PollsUnanswered";
import "../../App.css";
import PollsAnswered from "./PollsAnswered";


const Polls = () => {
  const [show, toggleShow] = useState(true);

  return (
    <Container fluid>
    <Button id="changepolls" variant="primary" onClick={() => toggleShow(!show)}>   {show ? 'Completed Questions' : 'New Questions'}</Button>
     {show && <PollsUnanswered />  } 
    {!show && <PollsAnswered />  }  
       
    </Container>
  );
};

export default Polls;
