import React, {useState, useEffect} from "react";
import './dashboard.css';

import { Navbar, Container, Row, Nav } from 'react-bootstrap';
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

    const [username, setUsername] = useState([]);

    useEffect(() => {
      const name1 = localStorage.getItem('name');
      if (name1) {
        setUsername(name1);
      }
    }, []);
    
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
            <Nav className="me-auto">
                <Nav.Link href="#">{username}</Nav.Link>
            </Nav>
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