import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Mysidebar from './layouts/Mysidebar/Mysidebar';
import Postit from './components/Postit/Postit';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import Login from './layouts/Login/SignIn';
import MyModal from './layouts/MyModal/MyModal'

import 'bootstrap/dist/css/bootstrap.min.css';

import postit1 from './assets/postit1.png'

import './App.css';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </>
  );
}

export default App;


function Main() {
    
    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Mysidebar></Mysidebar>
        <Navbar id="Navbar" bg="light">
            <Container fluid>
            <Navbar.Brand href="#">Maison Aveiro</Navbar.Brand>
            </Container>
        </Navbar>
        <Postit src={postit1}></Postit>
        {console.log(postit1)}

        <span onClick={openNav}>Open</span>
        <span onClick={closeNav}>Close</span>
        
        
        <button onClick={handleShow}>Open Modal</button>
        <MyModal></MyModal>
        
        </>
    );
  }

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "50em";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

