import React from "react";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import Navbar from "../components/Navbar/Navbar";
import '../styles/dashboard.css';
const LeaderBoardView = () => {

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
     <LeaderBoard/>
    </div>
  );
};

export default LeaderBoardView;
