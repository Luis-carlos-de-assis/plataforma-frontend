import React, { useState } from 'react';

// A função onLogin é recebida do App.js para que possamos entregar o token
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Pega o endereço da nossa API que configuramos no Vercel
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    setLoading(true);
    setError('');

    // O endpoint de token do FastAPI espera os dados em um formato especial (FormData)
    const formData = new URLSearchParams();
    formData.append('username', email); // O FastAPI espera o email no campo 'username'
    formData.append('password', password);

    try {
      const response = await fetch(`${apiUrl}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        // Se a resposta não for 200 (OK), lemos o erro
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Falha no login');
      }

      // Se o login deu certo, pegamos o token da resposta
      const data = await response.json();
      
      // Entregamos o token para o App.js, que vai guardar e nos redirecionar
      onLogin(data.access_token);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Estilos simples para centralizar o formulário
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login - Plataforma Manus</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
