import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addQuestion } from "../../features/questions";
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

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("alues.optionOne");

        dispatch(addQuestion({ ...values, author, id: generateUID() }));
        navigate(-1)

      }}
      initialValues={{
        optionOne: "",
        optionTwo: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Container fluid>
            <Row>
              <Col>
                <h2>Create a Poll</h2>
              </Col>
            </Row>
            <Row>
              <Form.Text>Would you rather?</Form.Text>

              <Form.Group className="mb-3" controlId="option2">
                <Form.Control
                  name="optionOne"
                  type="text"
                  placeholder="Input your 'Option One' here"
                  value={values.optionOne}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="option1">
                <Form.Control
                  name="optionTwo"
                  type="text"
                  placeholder="Input your 'Option Two' here"
                  value={values.optionTwo}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit">Create Poll</Button>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePoll;
