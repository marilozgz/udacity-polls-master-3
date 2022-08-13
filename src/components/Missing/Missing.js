import { Link } from "react-router-dom"
import {  useNavigate } from "react-router-dom";

import React from 'react';
import Moon  from '../../images/moon.png';
import Rocket from '../../images/rocket.png';
import "./Misssing.css"
const Missing = () => {

    return (

        <div className="content row">
            <div className="content-col-left col-md p-5 align-self-center">
                <img src={ Moon } alt="" className="img-fluid"/>
            </div>
            <div className="content-col-right col-md p-5 align-self-center text-light">
                <h1 className="content-title text-left">404 Not Found</h1>
                <p className="text-left">We sorry, the page you are looking for does not appear. Please back home by pressing button bellow.</p>
              
              
                <img src={ Rocket } alt="" className="img-fluid"/>
            </div>
        </div>
    )
}

export default Missing