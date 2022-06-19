import React, {useState, useEffect} from "react";

import { Modal, Button, Form} from 'react-bootstrap';

export function MyModal(props) {

    const [inputs, setInputs] = useState({});

    const [username, setUsername] = useState([]);

    useEffect(() => {
      const name1 = JSON.parse(localStorage.getItem('name'));
      if (name1) {
        setUsername(name1);
      }
    }, []);
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      fetch('/api/bill', {
        method: 'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify([inputs], [{"publishBy": {username}}])
      })
      .then(response => response.json())
      .then(inputs => {
        console.log('Success:', inputs);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    function handleModalClose(event){
        props.onChange(false)
    }

    return (
        <>
          <Modal show={props.showModal}  centered size="lg">
            <Modal.Header closeButton onClick={handleModalClose}>
              <Modal.Title>Adicionar nova conta</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control type="text" placeholder="ex: Luz Nov. Tiago" name="titulo" value={inputs.titulo || ""} onChange={handleChange} />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control as="textarea" rows={3} name="descricao" value={inputs.descricao || ""} onChange={handleChange} />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Total</Form.Label>
                  <Form.Control type="number" name="amount" value={inputs.amount || ""} onChange={handleChange} />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <div class="d-flex row">
                    <div class="col">
                      <Form.Label>Fatura</Form.Label>
                      <Form.Control type="file" size="sm" name="fatura" value={inputs.fatura || ""} onChange={handleChange} />
                    </div>
                    <div class="col">
                      <Form.Label>Recibo</Form.Label>
                      <Form.Control type="file" size="sm" name="recibo" value={inputs.recibo || ""} onChange={handleChange} />
                    </div>
                  </div>
                </Form.Group>
  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleModalClose} type="submit">
                  Adicionar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </>
      );
}