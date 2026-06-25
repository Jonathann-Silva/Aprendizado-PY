// Exercício 024: Promises básicas
// Objetivo: Criar e consumir uma Promise para entender operações assíncronas assinaladas.
//
// Instruções:
// 1. Crie uma função chamada `verificarNumero(num)` que retorne uma Promise.
// 2. Dentro da Promise, use `setTimeout` para esperar 1 segundo.
// 3. Após 1 segundo, se o número for par, chame `resolve("Número par!")`.
// 4. Si for ímpar, chame `reject("Número ímpar!")`.
// 5. Chame `verificarNumero(4)` e use os métodos `.then(resultado => console.log(resultado))` e `.catch(erro => console.error(erro))` para exibir a resposta.
//
// Saída esperada no terminal (após 1 segundo):
// Número par!
//
// Para executar este arquivo, use o comando: node ex024.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar Promise que resolve se a idade do usuário for de maior, ou rejeita se de menor.
//
// function verificarMaioridade(idade) {
//   return new Promise((resolve, reject) => {
//     if (idade >= 18) resolve('Acesso Liberado!');
//     else reject('Acesso Negado: menor de idade.');
//   });
// }
// verificarMaioridade(20)
//   .then(msg => console.log(msg))
//   .catch(err => console.error(err));
// ====================================================================

// Escreva seu código abaixo:


