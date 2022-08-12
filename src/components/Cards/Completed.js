import React from "react";
import { useSelector } from "react-redux";
import questions from "../../features/questions";
import {formatDate} from '../../utils/helper';

const Card =() =>{

    const users = useSelector(state => state.users.users );

    return(
        <div className="card">
        {Object.keys(questions).map(question => (
            <div className="card-body" key={question}>  
            <div className="card-header">
            <img src={users[questions[question].author].avatarURL} alt="avatar" className="avatar"/>
            <h3 className="author">{questions[question].author}</h3>
            <h4 className="poll-timestamp">
            {formatDate(questions[question].timestamp)}
          </h4>
          </div>
          <div className="card-body">
          <Link to="/poll"><button className="button">Answer this one</button></Link>
          </div>
          </div>
        ))}
        </div>
    )
}

export default Card;