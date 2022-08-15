import React , {useState}from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import  { addQuestion } from "../../features/questions";
import { getAuthedUserId } from "../../selectors/users";
import { generateUID } from "../../utils/_DATA";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const schema = Yup.object().shape({
  optionOne: Yup.string().required(),
  optionTwo: Yup.string().required(),
});

const CreatePoll = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const author = useSelector(getAuthedUserId);
  const [disabledButton, setDisabledButton] = useState(false);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        setDisabledButton(false);
        dispatch(addQuestion({ ...values, author, id: generateUID() }));
        navigate("/dashboard");

      }}
      initialValues={{
        optionOne: "",
        optionTwo: "",
        disabledButton : true
      }}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Container fluid>
            <Row className="header">
              <Col>
                <h2>Create a Poll</h2>
              </Col>
            </Row>
            <Row className="body-createpolls">
              <Form.Text>Would you rather?</Form.Text>

              <Form.Group className="mb-3" controlId="optionOneText">
                <Form.Control
                  name="optionOne"
                  type="text"
                  data-testid="optionOneText"
                  placeholder="Input your 'Option One' here"
                  value={values.optionOne}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="optionTwoText">
                <Form.Control
                  name="optionTwo"
                  type="text"
                  data-testid="optionTwoText"
                  placeholder="Input your 'Option Two' here"
                  value={values.optionTwo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <button className=" btn btn-success col-xs-3 col-sm-3 col-md-3 col-lg-3" type="submit" data-testid='submit-button'
              disabled={disabledButton} >Create Poll</button>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePoll;
