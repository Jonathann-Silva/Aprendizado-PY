// Exercício 046: Tratamento de Erros com Try/Catch/Finally
// Objetivo: Capturar exceções e garantir execução de código de limpeza usando a estrutura completa de tratamento de erros.
//
// Instruções:
// 1. Crie uma função `dividir(a, b)`. Se `b` for igual a 0, lance um erro (`throw new Error('Divisão por zero não é permitida.')`). Caso contrário, retorne a divisão.
// 2. Execute a função duas vezes dentro de blocos try/catch/finally:
//    - Primeira vez: `dividir(10, 0)`. No catch, imprima: "Erro: [mensagem-do-erro]". No finally, imprima: "Operação finalizada."
//    - Segunda vez: `dividir(10, 2)`. Imprima o resultado. No finally, imprima: "Operação finalizada."
//
// Saída esperada no terminal:
// Erro: Divisão por zero não é permitida.
// Operação finalizada.
// Resultado: 5
// Operação finalizada.
//
// Para executar este arquivo, use o comando: node ex046.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Tratar parsing de JSON inválido usando bloco try/catch/finally.
//
// try {
//   const dados = JSON.parse("{ nome: invalido }");
// } catch(e) {
//   console.log("JSON inválido: " + e.message);
// } finally {
//   console.log("Validação finalizada.");
// }
// ====================================================================

// Escreva seu código abaixo:


