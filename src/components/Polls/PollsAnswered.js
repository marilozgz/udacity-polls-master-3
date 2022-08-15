import React  from "react";
import {Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import './polls.css'
const PollsAnswered = () => {
    const questions = useSelector((state) => state.questions.questions);
    const authedUser = useSelector((state) => state.authedUser.authedUser);
    const users = useSelector((state) => state.users.users);

    const answeredQuestions = Object.keys(questions)
    .filter((i) => (
      questions[i].optionOne.votes.includes(authedUser) ||
      questions[i].optionTwo.votes.includes(authedUser)
    ))
    .sort((a,b) => (
      questions[b].timestamp - questions[a].timestamp
    ))
    .map(question => {
      const mapAsweredQuestions = {
        id: questions[question].id,
        author: questions[question].author,
        avatarURL: users[questions[question].author].avatarURL,
        timestamp: questions[question].timestamp,
        optionOne: {
          votes: questions[question].optionOne.votes,
          text: questions[question].optionOne.text,
        },
        optionTwo: {
          votes: questions[question].optionTwo.votes,
          text: questions[question].optionTwo.text,
        }
      }
    return mapAsweredQuestions;
    });

    return(
        <div>
        <Row className="mt-10 pt-2 mb-5">
          <h2 style={{ textAlign: "center" }}>Completed Questions</h2>
        </Row>
        <Row className="justify-content-md-center mb-5">
        {answeredQuestions.map(q => (
                <Col md="auto" key={q.id}>
                  <Card
                    image={q.avatarURL}
                    date={q.timestamp}
                    author={q.author}
                    id={q.id}
                    key={q.id}
                  />
                </Col>
              ))}
         
        </Row>
        </div>
    )
}


export default PollsAnswered;