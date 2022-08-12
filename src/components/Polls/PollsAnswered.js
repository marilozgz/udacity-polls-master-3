import React  from "react";
import {Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";

const PollsAnswered = () => {
    const questions = useSelector((state) => state.questions.questions);
    const authedUser = useSelector((state) => state.authedUser.authedUser);
    const users = useSelector((state) => state.users.users);

   

    return(
        <div>
        <Row className="mt-10 pt-2 mb-5">
          <h2 style={{ textAlign: "center" }}>Completed Questions</h2>
        </Row>
        <Row className="justify-content-md-center mb-5">
          {Object.keys(questions).sort((a,b)=>b.timestamp - a.timestamp).map((question) => {
            if (users[authedUser]?.answers[question]) {
              return (
                <Col md="auto" key={question}>
                  <Card
                    image={users[questions[question].author].avatarURL}
                    date={questions[question].timestamp}
                    author={questions[question].author}
                    id={questions[question].id}
                    key={questions[question].id}
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


export default PollsAnswered;