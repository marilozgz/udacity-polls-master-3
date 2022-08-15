import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setauthedUser } from "../../features/authUser";
import { useNavigate, useLocation } from "react-router-dom";
const LoginSelect = () => {
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState({});
  const userList = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";

  const handleChange = (e) => {
    user.state = e.target.value;
    setDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.state) {
      dispatch(setauthedUser(user.state));
      console.log(from);
      navigate(from, { replace: true });
    }
  };

  return (
    <Container fluid>
      <Row className="col-md-12">
        <Row>
          <h1>Loggin into your account</h1>
        </Row>
        <Col></Col>
        <Col className="col-md-8">
          <Form.Select
            onChange={handleChange}
            className="mb-3"
            data-testid="select-user"
            aria-label="Login User"
            size="lg"
          >
            <option> Choose your user</option>
            {Object.values(userList).map((key) => (
              <option key={key.id} value={key.id}>
                {key.name}
              </option>
            ))}
          </Form.Select>

          <Button
            disabled={disabled}
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoginSelect;
