// Exercício 090: Reflect - Metaprogramação Básica
// Objetivo: Utilizar a API Reflect para manipulação indireta e segura de objetos JavaScript.
//
// Instruções:
// 1. Crie um objeto `usuario = { nome: 'Beto' };`.
// 2. Use o método `Reflect.get()` para ler a propriedade `nome` e imprima no terminal.
// 3. Use o método `Reflect.set()` para adicionar a propriedade `idade` com valor 30.
// 4. Use `Reflect.ownKeys()` para extrair todas as chaves do objeto e imprima a lista retornada.
//
// Saída esperada no terminal:
// Nome lido: Beto
// Chaves do objeto: [ 'nome', 'idade' ]
//
// Para executar este arquivo, use o comando: node ex090.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Verificar se objeto possui propriedade 'cidade' usando Reflect.has().
//
// const pessoa = { nome: 'Ana' };
// console.log(Reflect.has(pessoa, 'cidade')); // false
// ====================================================================

// Escreva seu código abaixo:


