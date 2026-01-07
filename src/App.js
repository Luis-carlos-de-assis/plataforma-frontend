import React from 'react';

function App() {
  // Por enquanto, vamos apenas mostrar uma mensagem de boas-vindas.
  // Nos próximos passos, adicionaremos as rotas para a tela de login, etc.
  
  // A variável de ambiente REACT_APP_API_URL será configurada no Vercel.
  const apiUrl = process.env.REACT_APP_API_URL || "API URL não configurada";

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Controle da Plataforma Manus</h1>
      <p>O "Rosto" do nosso projeto está no ar!</p>
      <hr />
      <p>
        <strong>Status do Cérebro (Backend):</strong> A API está configurada para ser acessada no seguinte endereço: 
          

        <a href={apiUrl} target="_blank" rel="noopener noreferrer">{apiUrl}</a>
      </p>
      <p>Se o link acima estiver correto, o próximo passo é conectar os dois.</p>
    </div>
  );
}

export default App;
