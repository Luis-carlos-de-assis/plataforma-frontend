import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  // Vamos usar o estado para guardar o token de acesso
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ao carregar o app, verifica se já existe um token no armazenamento local
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); // Termina o carregamento inicial
  }, []);

  // Função para salvar o token após o login
  const handleLogin = (newToken) => {
    localStorage.setItem('accessToken', newToken);
    setToken(newToken);
  };

  // Função para remover o token no logout
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
  };

  // Enquanto verifica o token, não mostra nada para evitar piscar a tela
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            token ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            token ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />
          } 
        />
        {/* Rota padrão: se estiver logado vai para o dashboard, senão para o login */}
        <Route 
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
