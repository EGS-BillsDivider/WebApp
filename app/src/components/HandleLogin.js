import React from "react";
import { useSearchParams, Navigate } from 'react-router-dom';

const HandleLogin = (props) => {
    const [searchParams] = useSearchParams();

    let id = searchParams.get('id');
    let token = searchParams.get('token');

    // setter
    localStorage.setItem('token', token);

    props.onChange(true);

    return <Navigate to="/dashboard" replace />;
};

export default HandleLogin;