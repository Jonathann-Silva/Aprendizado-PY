// Exercício 079: HTTP Server - Cabeçalhos Customizados
// Objetivo: Validar cabeçalhos de requisição de forma manual para implementar autenticação simples por token de cabeçalho.
//
// Instruções:
// 1. Crie um servidor HTTP escutando na porta `3000`.
// 2. No callback do servidor, verifique se o cabeçalho de requisição `x-api-key` está presente e tem o valor "segredo123".
// 3. Se estiver correto, envie resposta com status 200 e a mensagem "Acesso autorizado!".
// 4. Se estiver faltando ou incorreto, envie status 401 (Unauthorized) com a mensagem "Não autorizado!".
//
// Saída esperada no terminal:
// Servidor rodando na porta 3000...
// (Responde com 200 se enviar header x-api-key: segredo123, ou 401 caso contrário)
//
// Para executar este arquivo, use o comando: node ex079.js

// Escreva seu código abaixo:

