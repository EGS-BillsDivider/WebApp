import React, {useState} from "react";
import './dashboard.css';

import { Navbar, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { MyModal } from '../MyModal/MyModal';
import { Main } from '../Main/Main';
import { useNavigate } from "react-router-dom";

export function Dashboard(props) {
    let navigate = useNavigate();
  
    const [showModal, setShowModal] = useState(false);

    function handleModalChange( new_showModal ) {
      setShowModal(new_showModal);
    }
    
    function handleLogOut() {
        props.onChange(false);
        navigate("/");
    }
    
    return (
      <>
        <Navbar id="Navbar" bg="light">
            <Container>
            <Navbar.Brand href="#">Maison Aveiro</Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">
                <Button variant="outline-primary" onClick={handleLogOut}>Log Out</Button>{' '}
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <Container>
            <Row >
                <Main></Main>
            </Row>
            <Row className="d-flex justify-content-end">
                <Button variant="primary" onClick={handleModalChange}>
                Add Bill
                </Button>
            </Row>
        </Container>

        <MyModal showModal={showModal} onChange={handleModalChange}></MyModal>
      </>
    );
}