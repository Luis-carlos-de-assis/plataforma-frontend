import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pagina/Login';
import Dashboard from './pagina/Dashboard';
import Cardapio from './pagina/Cardapio';
import './App.css';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/" />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/dashboard/cardapio" element={<PrivateRoute><Cardapio /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
    
