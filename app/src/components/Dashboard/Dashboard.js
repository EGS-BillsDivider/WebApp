import React, {useState} from "react";
import './dashboard.css'

import { Navbar, Container } from 'react-bootstrap';
import {  Button, Card} from 'react-bootstrap';

import { MyModal } from '../MyModal/MyModal'

export function Dashboard() {
  
    const [showModal, setShowModal] = useState(false);

    function handleModalChange( new_showModal ) {
      setShowModal(new_showModal);
    }
  
    return (
      <>
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
            <Button variant="primary" onClick={handleModalChange}>
              Add Bill
            </Button>
          </div>
        </div>

        <MyModal showModal={showModal} onChange={handleModalChange}></MyModal>
      </>
    );
}