import React from 'react';
import {Row, Col} from "react-bootstrap";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";

export function PollsUnanswered (props) {
    const questions = useSelector((state) => state.questions.questions);
    const authedUser = useSelector((state) => state.authedUser.authedUser);
    const users = useSelector((state) => state.users.users);

    return(
        <div>
        <Row className="justify-content-md-center mt-5">
        <h2 style={{ textAlign: "center" }}>New questions</h2>
      </Row>
      <Row className="justify-content-md-center mt-5 mb-5">
        {Object.keys(questions).sort((a,b)=>b.timestamp - a.timestamp).map((key) => {
          if (!users[authedUser]?.answers[key]) {
            return (
              <Col md="auto" key={key}>
                <Card
                  key={key}
                  id={key}
                  image={users[questions[key].author].avatarURL}
                  date={questions[key].timestamp}
                  author={[questions[key].author]}
                />
              </Col>
            );
          }
          return null;
        })}
      </Row>
        </div>
    )
}

export default PollsUnanswered;