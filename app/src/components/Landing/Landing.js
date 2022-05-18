import React from "react";
import { useNavigate } from 'react-router';
import { Container, Button } from 'react-bootstrap';

import "./landing.css"

export function Landing(props) {
    let navigate = useNavigate();

    function handleLoginChange(event){
        props.onChange(true)
    }
    
    function handleLogin(){
        handleLoginChange();
        navigate('/dashboard');
    }

    return (
        <>
            <Container className="d-flex vh-100 justify-content-center align-items-center">
                <Button variant="primary" onClick={handleLogin}>Log In</Button>{' '}
                <Button variant="outline-primary">Sign In</Button>{' '}
            </Container>
        </>
      );
}

