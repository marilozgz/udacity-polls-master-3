import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row, Col, Image} from 'react-bootstrap';
const LeaderBoard = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);

  const usersRanking = Object.keys(users).map((key) => {
    return {
      id: key,
      name: users[key].name,
      avatarURL: users[key].avatarURL,
      questions: users[key].questions.length,
      answers: Object.keys(users[key].answers).length,
    };
  });

  usersRanking.sort((a, b) => {
    return b.questions + b.answers - (a.questions + a.answers);
  });

  return (
     <Container>
      <Row  className="mt-5 mb-3 justify-content-md-center">
      <Col></Col>
       <Col  xs={3}><h3>LeaderBoard</h3></Col> 
       <Col></Col>
      </Row>
      <Row >
        {usersRanking.map((user) => (
          <Col key={user.id}>
          <Card key={user.name}>
            <Card.Header >
              <Image
                src={user.avatarURL}
                alt={user.name}
                roundedCircle
              />
              </Card.Header>
              <Card.Body>
              <Card.Title className="username">{user.name}</Card.Title>
              <Card.Text>
                ANSWERS: {user.answers}
              </Card.Text>
              <Card.Text className="user-questions">
                QUESTIONS: {user.questions}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default LeaderBoard;