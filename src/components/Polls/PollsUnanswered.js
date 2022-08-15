import React from 'react';
import {Row, Col} from "react-bootstrap";
import Card from "../Cards/Card";
import { useSelector } from "react-redux";
import './polls.css'
export function PollsUnanswered (props) {
    const questions = useSelector((state) => state.questions.questions);
    const authedUser = useSelector((state) => state.authedUser.authedUser);
    const users = useSelector((state) => state.users.users);
    const unansweredQuestions = Object.keys(questions)
    .filter((i) => (
        !questions[i].optionOne.votes.includes(authedUser) &&
        !questions[i].optionTwo.votes.includes(authedUser)
    ))
    .sort((a,b) => (
        questions[b].timestamp - questions[a].timestamp
    ))
    .map(question => {
      const mapUnansweredQuestions = {
        id: questions[question].id,
        author: questions[question].author,
        timestamp: questions[question].timestamp,
        avatarURL: users[questions[question].author].avatarURL,
        optionOne: {
          votes: questions[question].optionOne.votes,
          text: questions[question].optionOne.text,
        },
        optionTwo: {
          votes: questions[question].optionTwo.votes,
          text: questions[question].optionTwo.text,
        }
      }
    return mapUnansweredQuestions;
    });
  
    return(
        <div>
        <Row className="justify-content-md-center mt-5">
        <h2 style={{ textAlign: "center" }}>New questions</h2>
      </Row>
      <Row className="justify-content-md-center mt-5 mb-5">
     
 
             {unansweredQuestions.map(q => (
              <Col data-testid={"question-list"}  md="auto" key={q.id}>
              <Card 
                key={q.id}
                id={q.id}
                image={q.avatarURL}  
                date={q.timestamp}
                author={q.author}
              />
            </Col>
            ))}
            
          
          
        
      </Row>
        </div>
    )
}

export default PollsUnanswered;