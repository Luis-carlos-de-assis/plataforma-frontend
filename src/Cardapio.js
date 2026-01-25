import React, { useState } from 'react';

const Cardapio = () => {
    const [itens] = useState([
        { id: 1, nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão', preco: '30.00', categoria: 'Pizza' },
        { id: 2, nome: 'Pizza Calabresa', descricao: 'Molho de tomate, mussarela e calabresa', preco: '35.00', categoria: 'Pizza' },
        { id: 3, nome: 'Refrigerante', descricao: 'Lata 350ml', preco: '5.00', categoria: 'Bebida' }
    ]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Gerenciamento de Cardápio</h2>

            <div style={{ marginBottom: '40px' }}>
                <h3>Adicionar Novo Item</h3>
                <form>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Nome do Item: </label>
                        <input type="text" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Descrição: </label>
                        <input type="text" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Preço: </label>
                        <input type="text" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Categoria: </label>
                        <input type="text" />
                    </div>
                    <button type="submit">Adicionar Item</button>
                </form>
            </div>

            <div>
                <h3>Itens Atuais</h3>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td>R$ {item.preco}</td>
                                <td>{item.categoria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cardapio;
        
