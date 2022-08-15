import React from "react";
import { useSelector  } from "react-redux";


import Menu from "./Menu";
import MenuLogOut from "./MenuLogOut";

function NavBar() {
 

  const  isLoggedIn =  useSelector((state) => state.authedUser.authedUser);

  
  return(!isLoggedIn ? <MenuLogOut/>: <Menu/>)

   
   

}

export default NavBar;
