import React, { useState } from 'react';

const Cardapio = () => {
    const [itens, setItens] = useState([
        { id: 1, nome_item: 'Pizza Calabresa', preco: 35.50, categoria: 'Pizza Salgada' },
        { id: 2, nome_item: 'Coca-Cola 2L', preco: 10.00, categoria: 'Bebida' }
    ]);

    const [formItem, setFormItem] = useState({
        nome_item: '',
        descricao: '',
        preco: '',
        categoria: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Novo item a ser salvo:', formItem);
        alert('Funcionalidade de salvar ainda não implementada.');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Gerenciamento de Cardápio</h2>

            <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h3>Adicionar Novo Item</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                        type="text"
                        name="nome_item"
                        placeholder="Nome do Item (ex: Pizza Calabresa)"
                        value={formItem.nome_item}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="descricao"
                        placeholder="Descrição (ex: Molho, mussarela, calabresa e cebola)"
                        value={formItem.descricao}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="preco"
                        placeholder="Preço (ex: 35.50)"
                        value={formItem.preco}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                    <input
                        type="text"
                        name="categoria"
                        placeholder="Categoria (ex: Pizza Salgada)"
                        value={formItem.categoria}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Salvar Item</button>
                </form>
            </div>

            <div>
                <h3>Itens Atuais</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #333' }}>
                            <th style={{ textAlign: 'left', padding: '8px' }}>Nome</th>
                            <th style={{ textAlign: 'left', padding: '8px' }}>Categoria</th>
                            <th style={{ textAlign: 'left', padding: '8px' }}>Preço</th>
                            <th style={{ textAlign: 'left', padding: '8px' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map(item => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #ccc' }}>
                                <td style={{ padding: '8px' }}>{item.nome_item}</td>
                                <td style={{ padding: '8px' }}>{item.categoria}</td>
                                <td style={{ padding: '8px' }}>R$ {item.preco.toFixed(2)}</td>
                                <td style={{ padding: '8px' }}>
                                    <button style={{ marginRight: '5px' }}>Editar</button>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cardapio;
  
