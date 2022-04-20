import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard } from './components/Dashboard/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App;

