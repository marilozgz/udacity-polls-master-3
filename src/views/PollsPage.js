import React from "react";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from "../components/Navbar/Navbar";
import PollQuestions from "../components/Polls/PollQuestions";

const PollPage = () => {
  const navigage = useNavigate();
   

  const user =  useSelector((state) => state.authedUser.authedUser);
 
   useEffect(() => {
     if(!user) {
       navigage('/')
     }
   }
   , [])

  return (
    <div className="header">
      <Navbar />
     <PollQuestions/>
    </div>
  );
};

export default PollPage;
