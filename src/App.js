import React from 'react';
import Home from './components/Home';
import UserAdd from './components/UserAdd';
import UserEdit from './components/UserEdit';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
