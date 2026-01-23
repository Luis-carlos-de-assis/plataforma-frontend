import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <p>Olá, Mundo! O React está renderizando.</p>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard/cardapio">Gerenciar Cardápio</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
