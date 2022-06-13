import React , { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from './components/Dashboard/Dashboard'
import Protected from "./components/Protected";
import HandleLogin from "./components/HandleLogin";
import {Landing} from "./components/Landing/Landing"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    function handleLoginChange(new_value){
        setisLoggedIn(new_value);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={ <Landing isLoggedIn={isLoggedIn} onChange={handleLoginChange}/>} />
                <Route exact path="/login" element={<HandleLogin onChange={handleLoginChange} />} />
                <Route path="/dashboard" element={<Protected isLoggedIn={isLoggedIn}> <Dashboard onChange={handleLoginChange}/> </Protected>} />
            </Routes>
        </>
    );
}

export default App;

