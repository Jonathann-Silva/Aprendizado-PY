// Exercício 016: Servidor HTTP Básico
// Objetivo: Usar o módulo nativo `http` para criar um servidor web simples que responde com texto plano.
//
// Instruções:
// 1. Importe o módulo nativo `http`.
// 2. Use `http.createServer((req, res) => { ... })` para criar o servidor.
// 3. Dentro do callback, defina o cabeçalho de resposta: `res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})`.
// 4. Escreva a mensagem de resposta: `res.write('Olá, este é o meu primeiro servidor Node.js!')`.
// 5. Encerre a resposta com `res.end()`.
// 6. Faça o servidor ouvir na porta 3000 usando `.listen(3000, () => { console.log('Servidor rodando em http://localhost:3000'); })`.
// 7. Abra o navegador ou faça um curl em http://localhost:3000 para testar!
// Nota: Pressione CTRL + C no terminal para parar o servidor.
//
// Saída esperada no terminal ao rodar:
// Servidor rodando em http://localhost:3000
//
// Para executar este arquivo, use o comando: node ex016.js

// Escreva seu código abaixo:
