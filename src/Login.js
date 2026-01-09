import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        // O backend espera os dados como 'form-data', não JSON.
        // E espera o campo 'username', não 'email'.
        const params = new URLSearchParams();
        params.append('username', email); // Usamos a variável 'email' mas enviamos como 'username'
        params.append('password', password);

        try {
            const response = await axios.post('https://manus-api.onrender.com/token', params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            } );

            if (response.data.access_token) {
                localStorage.setItem('accessToken', response.data.access_token);
                navigate('/dashboard'); // Redireciona para o dashboard após o login
            } else {
                setError('Falha ao obter o token de acesso.');
            }
        } catch (err) {
            setError('Email ou senha incorretos.');
            console.error('Erro de login:', err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
