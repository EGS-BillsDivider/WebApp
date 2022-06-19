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
        window.location.replace('http://auth.billsdivider.egs/login');
    }

    function handleSignIn(){
        window.location.replace('http://auth.billsdivider.egs/register')
    }

    return (
        <>
            <Container className="d-flex vh-100 justify-content-center align-items-center">
                <Button variant="outline-danger" onClick={handleLogin}>Log In</Button>{' '}
                <Button variant="outline-primary" onClick={handleSignIn}>Sign In</Button>{' '}
            </Container>
        </>
      );
}

