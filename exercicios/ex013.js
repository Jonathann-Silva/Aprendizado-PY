// Exercício 013: Excluir/deletar um arquivo
// Objetivo: Usar o módulo `fs` para deletar um arquivo do sistema de forma síncrona.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Verifique se o arquivo `assincrono.txt` existe.
// 3. Se existir, delete-o usando `fs.unlinkSync('assincrono.txt')` e imprima: "Arquivo excluído com sucesso!"
// 4. Se não existir, imprima: "Arquivo não encontrado."
//
// Saída esperada no terminal:
// Arquivo excluído com sucesso! (se o arquivo ex010/ex011 o criou e ele ainda estiver lá)
//
// Para executar este arquivo, use o comando: node ex013.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Deletar arquivo de sessão de usuário expirada de forma assíncrona.
//
// const fs = require('fs');
// fs.unlink('sessao_antiga.txt', (err) => {
//   if (err) {
//     console.log('Arquivo não encontrado ou já foi excluído.');
//     return;
//   }
//   console.log('Arquivo excluído com sucesso.');
// });
// ====================================================================

// Escreva seu código abaixo:


