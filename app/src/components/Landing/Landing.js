import React from "react";
import { useNavigate } from 'react-router';
import { Container, Button } from 'react-bootstrap';

import "./landing.css"

export function Landing(props) {
    //let navigate = useNavigate();

    function handleLoginChange(event){
        props.onChange(true)
    }
    
    function handleLogin(){
        window.location.replace('http://localhost:8000/login');
    }

    return (
        <>
            <Container className="d-flex vh-100 justify-content-center align-items-center">
                <Button variant="outline-primary" onClick={handleLogin}>Log In</Button>{' '}
                <Button variant="outline-primary">Sign In</Button>{' '}
            </Container>
        </>
      );
}

