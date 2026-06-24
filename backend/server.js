// 1. Importar o Express
const express = require('express');

// 2. Inicializar o Express na variável app
const app = express();

// Definição da porta onde o servidor vai rodar
const PORT = 3000;

// Permite que o Express entenda requisições no formato JSON
app.use(express.json());

// ==========================================
// 🛠️ CRIAÇÃO DE ROTAS (Endpoints)
// ==========================================

// Rota padrão (Home) - Método GET
app.get('/', (req, res) => {
    res.send('🏠 Bem-vindo ao meu primeiro servidor Node.js com Express!');
});

// Rota de Usuários - Método GET (Simulando uma resposta de API)
app.get('/usuarios', (req, res) => {
    const listaUsuarios = [
        { id: 1, nome: 'João', profissao: 'Desenvolvedor' },
        { id: 2, nome: 'Maria', profissao: 'Designer' }
    ];
    
    // Retorna a lista em formato JSON
    res.json(listaUsuarios);
});

// ==========================================
// ⚡ INICIALIZAÇÃO DO SERVIDOR
// ==========================================
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});