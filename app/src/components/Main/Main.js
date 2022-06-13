import React, { useEffect, useState } from 'react'

import { Card, Col } from 'react-bootstrap';

export function Main() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('/api/bills', {
            method: 'GET',
            headers:  {'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'},
        })
        .then(res => res.json())
        .then( (result) => {
            setIsLoaded(true);
            console.log(result)
            setData(result);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
            console.error('Error:', error);
        });
    }

    useEffect( () => {
        getData()
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
            { data && data.length ?
            data.map( item => (
                <Col>
                    <Card bg={"warning"} style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Subtitle className="mb-3 mt-1 text-muted">{item.descricao}</Card.Subtitle>
                        <Card.Text>{item.amount}</Card.Text>
                        <Card.Footer>
                            <small className="text-muted">por {item.publishedBy} on {item.publishedOn}</small>
                        </Card.Footer>
                    </Card.Body>
                    </Card>
                </Col>
            )) : <div>Sem contas para apresentar!</div> }
          </>
        );
      }
}
