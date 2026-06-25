// Exercício 009: Criar uma nova pasta
// Objetivo: Usar o módulo `fs` para criar um novo diretório síncrono.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use a função `fs.existsSync('minha_pasta')` para verificar se ela já existe.
// 3. Se NÃO existir, use `fs.mkdirSync('minha_pasta')` para criá-la e imprima: "Pasta criada com sucesso!"
// 4. Se já existir, imprima: "A pasta minha_pasta já existe!"
//
// Saída esperada no terminal:
// Pasta criada com sucesso! (na primeira execução)
// A pasta minha_pasta já existe! (nas execuções seguintes)
//
// Para executar este arquivo, use o comando: node ex009.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar um diretório para uploads de fotos, se não existir.
//
// const fs = require('fs');
// if (!fs.existsSync('uploads')) {
//   fs.mkdirSync('uploads');
//   console.log('Pasta uploads criada!');
// }
// ====================================================================

// Escreva seu código abaixo:


