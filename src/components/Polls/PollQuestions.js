
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUserId, hasDonePoll } from "../../selectors/users";
import { answerQuestion } from "../../features/questions";
import { getPollCounts, getQuestionById } from "../../selectors/questions";
import { QUESTION_ANSWER_TYPE } from "../../utils/helpers";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPercentage } from "../../utils/helpers";
import  Missing  from "../Missing/Missing";
import "../../App.css"

const PollQuestions= () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const user = useSelector(getAuthedUserId);
    const donePoll = useSelector(hasDonePoll(id));
    const question = useSelector(getQuestionById(id));
    const { optionOne: optionOneVotes, optionTwo: optionTwoVotes } = useSelector(getPollCounts(id));
    const optionOneToText = question?.optionOne?.text;
    const optionTwoToText = question?.optionTwo?.text;
    const authedUser = useSelector((state) => state.authedUser.authedUser);

    const chooseOptionOne =  question?.optionOne.votes.includes(authedUser)
    const chooseOptionTwo=  question?.optionTwo.votes.includes(authedUser)
   
    const submitAnswer = (optionType) => {

        dispatch(answerQuestion({optionType, user, id}));
    }

    return(!question ? <Missing/>: 

   
        <div className="containerquestions">
        <Container >
       
        <Row className="questionsheader"> <Col></Col><Col><h2>Would You Rather?</h2></Col><Col></Col></Row>
        <Row className="questionsrow">
        <Col>
        {chooseOptionOne ?  <Row className="answerchoose">{optionOneToText}</Row>:
            <Row className="answer-title">{optionOneToText}</Row>}
            {donePoll ? (
                <Row className="answer-votes"><Col>Votes: {optionOneVotes}</Col> <Col>{getPercentage(optionOneVotes,optionTwoVotes)}%</Col></Row>
                
            
            ) : (
               <Row> <Button
               className="answer-button"
               onClick={() => {submitAnswer(QUESTION_ANSWER_TYPE.OPTION_ONE) }} > Vote this one!</Button></Row>
            )}
          </Col>
          <Col></Col>
          <Col>
          {chooseOptionTwo ?  <Row className="answerchoose">{optionOneToText}</Row>:
            <Row className="answer-title">{optionTwoToText}</Row>}
            {donePoll ? (
                <Row className="answer-votes"><Col>Votes: {optionTwoVotes}</Col><Col>{getPercentage(optionTwoVotes,optionOneVotes)}%</Col> </Row>
            ) : (
                <Row><Button 
                className="answer-button"
                onClick={() => { submitAnswer(QUESTION_ANSWER_TYPE.OPTION_TWO); }} >Vote this one!</Button></Row>
            )}
            
          
            </Col>
            
            </Row>
            </Container>
        </div>
        

    )
    
}
export default PollQuestions 