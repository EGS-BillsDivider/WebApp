import React, { useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom';

const HandleRegister = () => {
  const [searchParams] = useSearchParams();

  let id = searchParams.get('id');
  let name = searchParams.get('name');

  // save user idauth and name in backend
  const register = async () => {
    await fetch('/api/resgiter', {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify({"id": id, "name": name})
    })
    .then(response => response.json())
    .then( () => {
      console.log('Successefully saved id name pair!');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  register();

  return <Navigate to="/" replace />;
};

export default HandleRegister;