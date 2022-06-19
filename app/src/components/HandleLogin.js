import React, { useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom';

const HandleLogin = (props) => {
    const [searchParams] = useSearchParams();

    let id = searchParams.get('id');
    let token = searchParams.get('token');
    let name = searchParams.get('name');

    // save token in local storage
    localStorage.setItem('token', token);
    // save id in local storage
    localStorage.setItem('id', id);
    // save name in local storage
    localStorage.setItem('name', name);
    // change login state to true
    props.onChange(true);

    // navigate to /dashboard
    return <Navigate to="/dashboard" replace />;
};

export default HandleLogin;