import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Mysidebar from './layouts/Mysidebar/Mysidebar';
import Postit from './components/Postit/Postit';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import Login from './layouts/Login/SignIn';
import { Modal , Button, Card, Form} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

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

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/bill', {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(inputs => {
      console.log('Success:', inputs);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  //-------------------------------------

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
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" placeholder="ex: Luz Nov. Tiago" name="titulo" value={inputs.titulo || ""} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} name="descricao" value={inputs.descricao || ""} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total</Form.Label>
              <Form.Control type="number" name="amount" value={inputs.amount || ""} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <div class="d-flex row">
                <div class="col">
                  <Form.Label>Fatura</Form.Label>
                  <Form.Control type="file" size="sm" name="fatura" value={inputs.fatura || ""} onChange={handleChange}/>
                </div>
                <div class="col">
                  <Form.Label>Recibo</Form.Label>
                  <Form.Control type="file" size="sm" name="recibo" value={inputs.recibo || ""} onChange={handleChange}/>
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

