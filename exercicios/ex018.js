// Exercício 018: Servidor HTTP Rotas básicas
// Objetivo: Criar rotas básicas (diferentes páginas baseadas no caminho da URL requisitada).
//
// Instruções:
// 1. Importe o módulo `http`.
// 2. Crie o servidor. Dentro dele, use `req.url` para saber qual caminho o usuário acessou.
// 3. Escreva uma estrutura condicional (if/else ou switch):
//    - Se `req.url` for `/`, responda com texto ou HTML: "Página Inicial"
//    - Se `req.url` for `/sobre`, responda com: "Sobre Nós"
//    - Para qualquer outra rota, responda com status 404 e a mensagem: "Página não encontrada"
// 4. Use `res.end()` em cada caso.
// 5. Coloque o servidor para escutar na porta 3000.
//
// Saída esperada no terminal ao rodar:
// Servidor rodando em http://localhost:3000
// (No navegador, acesse http://localhost:3000/sobre para testar)
//
// Para executar este arquivo, use o comando: node ex018.js

// Escreva seu código abaixo:
