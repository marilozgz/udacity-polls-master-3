import React, {useState} from "react";
import { Button, Form, Col, Row, Container} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setauthedUser } from "../../features/authUser";
import { useNavigate } from "react-router-dom";
import "./login.css";
const LoginSelect = () => {
    const [user, setUser] = useState({});
    const [disabled, setDisabled] = useState({});
    const userList = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        user.state = e.target.value;
        setDisabled(false)
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(user.state){
            dispatch(setauthedUser(user.state));
            navigate("/dashboard");
        }
        
    }

    return(
        <Container   fluid>
        <Row className="loginform">
        <Row>
 <Row md={12}><h1>Loggin into your account</h1></Row>
        <Col></Col>
        <Col>
        <Form.Select onChange={handleChange} className="mb-3" data-testid="select-user" aria-label="Login User" size="lg">
        <option> Choose your user</option>
        {Object.values(userList).map((key) => (
            <option key={key.id} value={key.id}>{key.name}</option>
        ))}
        </Form.Select>

        <Button  disabled={disabled}  variant="primary" type="submit" onClick={handleSubmit}>Login</Button>        
        </Col>
        <Col></Col>
        
        </Row>
        </Row>
        </Container>
    )
}

export default LoginSelect;