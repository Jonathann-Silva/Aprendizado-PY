// Exercício 026: Requisição HTTP externa
// Objetivo: Usar a API global `fetch` (disponível a partir do Node.js v18+) para obter dados de uma API externa.
//
// Instruções:
// 1. Crie uma função assíncrona `buscarUsuario()`.
// 2. Dentro dela, faça um fetch na URL da API pública do GitHub para o usuário do Node.js: `https://api.github.com/users/nodejs`
// 3. Converta a resposta para JSON usando `await resposta.json()`.
// 4. Imprima no console o nome e o número de repositórios públicos (atributos `name` e `public_repos` da resposta).
// 5. Chame a função `buscarUsuario()`.
// Nota: Certifique-se de estar conectado à internet.
//
// Saída esperada no terminal:
// Nome no GitHub: Node.js | Repositórios públicos: [Número de repositórios]
//
// Para executar este arquivo, use o comando: node ex026.js

// Escreva seu código abaixo:
