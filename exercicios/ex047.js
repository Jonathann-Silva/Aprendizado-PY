// Exercício 047: Criando Erros Personalizados
// Objetivo: Criar uma classe de erro customizada estendendo a classe nativa Error.
//
// Instruções:
// 1. Crie uma classe `SaldoInsuficienteError` que herda (`extends`) de `Error`. No construtor, defina a mensagem padrão e mude a propriedade `this.name = 'SaldoInsuficienteError';`.
// 2. Crie uma função `sacar(valor)` que simula um saque de uma conta com saldo de R$ 100. Se `valor > 100`, lance o erro `SaldoInsuficienteError`.
// 3. Chame a função `sacar(150)` dentro de um bloco try/catch e capture o erro imprimindo no console: "Erro [nome-do-erro]: [mensagem-do-erro]".
//
// Saída esperada no terminal:
// Erro [SaldoInsuficienteError]: Saldo insuficiente para realizar o saque.
//
// Para executar este arquivo, use o comando: node ex047.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar erro personalizado ConexaoBancoError herdando da classe Error.
//
// class ConexaoBancoError extends Error {
//   constructor(msg) {
//     super(msg);
//     this.name = 'ConexaoBancoError';
//   }
// }
// ====================================================================

// Escreva seu código abaixo:


