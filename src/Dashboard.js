import React, { useState, useEffect } from 'react';

// A função onLogout é recebida do App.js para que possamos "devolver o crachá"
function Dashboard({ onLogout }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Pega o endereço da nossa API que configuramos no Vercel
  const apiUrl = process.env.REACT_APP_API_URL;

  // Ao carregar o Dashboard, busca as informações do usuário logado
  useEffect(() => {
    const fetchUser = async () => {
      // Pega o "crachá" (token) que está guardado no bolso (localStorage)
      const token = localStorage.getItem('accessToken');

      try {
        const response = await fetch(`${apiUrl}/contas/me/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Apresenta o crachá para o Cérebro
          },
        });

        if (!response.ok) {
          throw new Error('Não foi possível buscar os dados do usuário.');
        }

        const userData = await response.json();
        setUser(userData); // Guarda as informações do usuário

      } catch (err) {
        setError(err.message);
        // Se houver um erro (ex: token expirado), faz o logout
        onLogout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [apiUrl, onLogout]); // A dependência onLogout é importante aqui

  // Estilos simples para o painel
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      paddingBottom: '10px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  if (loading) {
    return <div style={styles.container}>Carregando painel...</div>;
  }

  if (error) {
    return <div style={styles.container}>Erro: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Bem-vindo ao Painel, {user ? user.email : 'Usuário'}!</h1>
        <button onClick={onLogout} style={styles.button}>
          Sair
        </button>
      </div>
      <p>Este é o seu painel de controle. A partir daqui, você poderá gerenciar seus agentes.</p>
      {/* Futuramente, aqui entrarão os componentes GerenciadorAgentes, etc. */}
    </div>
  );
}

export default Dashboard;
