// Exercício 089: Proxy - Interceptação de Propriedades
// Objetivo: Implementar a metaprogramação interceptando ações básicas como leitura e escrita em propriedades de um objeto.
//
// Instruções:
// 1. Crie um objeto simples: `const target = { nome: 'João' };`.
// 2. Crie uma instância de `Proxy` para envelopar o objeto `target`.
// 3. No handler do Proxy, defina o trap `get` para imprimir "Lendo propriedade: [chave] -> [valor]" toda vez que lerem algo e retornar o valor.
// 4. Defina o trap `set` para imprimir "Escrevendo propriedade: [chave] -> [valor]" toda vez que alterarem um valor.
// 5. Faça uma leitura de `nome` no proxy e em seguida mude a propriedade `idade` para `26`.
//
// Saída esperada no terminal:
// Lendo propriedade: nome -> João
// Escrevendo propriedade: idade -> 26
//
// Para executar este arquivo, use o comando: node ex089.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Validar se valor atribuído a uma propriedade numérica é positivo.
//
// const conta = { saldo: 100 };
// const validador = new Proxy(conta, {
//   set(obj, prop, valor) {
//     if (prop === 'saldo' && valor < 0) throw new Error('Saldo inválido');
//     obj[prop] = valor;
//     return true;
//   }
// });
// ====================================================================

// Escreva seu código abaixo:


