import React from "react";
import { useSelector , useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { removeauthedUser } from "../../features/authUser";
//Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';

function Menu() {
  const authedUser = useSelector((state) => state.authedUser.authedUser);
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const name = users[authedUser].name;
  const avatarURL = users[authedUser].avatarURL;
  const handleLogout = () => {
    dispatch(removeauthedUser(null))
    navigate("/")
  }

return(
   
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Image
            roundedCircle
            src={avatarURL}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <small>Hi! {name}</small>
        </Navbar.Brand>
        <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
      <Nav.Link as={Link} to="/add">Create Poll</Nav.Link>
      <Nav.Link as= {Link} to="/leaderboard">LeaderBoard</Nav.Link>
      <Nav.Link onClick={handleLogout}>Sign-out</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Menu;
