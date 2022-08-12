import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Create from "../components/Create/Create";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CreatePoll = () => {

    const navigate = useNavigate();
   

   const user =  useSelector((state) => state.authedUser.authedUser);
  
    useEffect(() => {
      if(!user) {
        navigate('/')
      }
    }
    , [])

    return(
        <div>
        <NavBar/>
        <Create/>
        </div>
    )
}

export default CreatePoll;