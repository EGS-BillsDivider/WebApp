import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Mysidebar from './layouts/Mysidebar/Mysidebar';
import Postit from './components/Postit/Postit';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import Login from './layouts/Login/SignIn';
import { Modal , Button, Card, Form} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import ProtectedRoutes from "./ProtectedRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';

import postit1 from './assets/postit1.png'

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Main />} />
            </Route>
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
        <div class="container">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>titulo da conta</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">descrição</Card.Subtitle>
              <Card.Text>
                Tiago 7,68 euros
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
        <div class="container">
          <div class="d-flex justify-content-end">
            <Button variant="primary" onClick={handleShow}>
              Add Bill
            </Button>
          </div>
        </div>
    
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
              <Modal.Title >Adicionar nova conta</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="ex: Luz Nov. Tiago" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Total</Form.Label>
                  <NumericInput step={0.01} placeholder="ex: 32.56"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <div class="d-flex row">
                  <div class="col">
                    <Form.Label>Fatura</Form.Label>
                    <Form.Control type="file" size="sm"/>
                  </div>
                  <div class="col">
                    <Form.Label>Recibo</Form.Label>
                    <Form.Control type="file" size="sm"/>
                  </div>
                </div>
              </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} type="submit">
                  Adicionar
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
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

