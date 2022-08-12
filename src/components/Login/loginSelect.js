import React, {useState} from "react";
import { Button, Form, Col, Row, Container} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setauthedUser } from "../../features/authUser";
import { useNavigate } from "react-router-dom";

const LoginSelect = () => {
    const [user, setUser] = useState({});
    const userList = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        user.state = e.target.value;
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.state){
            dispatch(setauthedUser(user.state));
            navigate("/dashboard");
        }
        
    }

    return(
        <Container fluid>
        <Row><h1>Loggin into your account</h1></Row>
        <Row>

        <Col></Col>
        <Col>
        <Form.Select onChange={handleChange} className="mb-3"  aria-label="Login User" size="lg">
        <option> Choose your user</option>
        {Object.values(userList).map((key) => (
            <option key={key.id} value={key.id}>{key.name}</option>
        ))}
        </Form.Select>

        <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>        
        </Col>
        <Col></Col>
        
        </Row>
        </Container>
    )
}

export default LoginSelect;