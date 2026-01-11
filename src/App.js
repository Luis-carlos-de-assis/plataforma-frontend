import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GerenciarCardapio from './pages/GerenciarCardapio';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cardapio" element={<GerenciarCardapio />} />
            </Routes>
        </Router>
    );
}

export default App;
