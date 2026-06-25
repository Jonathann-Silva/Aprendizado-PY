// Exercício 045: Classes - Getters e Setters
// Objetivo: Controlar o acesso a propriedades de um objeto usando get e set.
//
// Instruções:
// 1. Crie uma classe `Temperatura` com uma propriedade interna `_celsius` inicializada com 0.
// 2. Crie um getter para a propriedade `fahrenheit` que converte Celsius para Fahrenheit: `(c * 9/5) + 32`.
// 3. Crie um setter para `fahrenheit` que converte o valor recebido para Celsius: `(f - 32) * 5/9` e salva em `_celsius`.
// 4. Instancie a classe, mude `_celsius` para 25 e imprima a temperatura em Fahrenheit via getter.
// 5. Mude a temperatura em Fahrenheit para 86 via setter e imprima `_celsius` via propriedade diretamente.
//
// Saída esperada no terminal:
// Temperatura em Fahrenheit: 77
// Temperatura em Celsius: 30
//
// Para executar este arquivo, use o comando: node ex045.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar getters e setters para definir o nome completo a partir do primeiro e último nome.
//
// class Usuario {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }
//   get nomeCompleto() { return `${this.nome} ${this.sobrenome}`; }
//   set nomeCompleto(valor) {
//     const partes = valor.split(' ');
//     this.nome = partes[0];
//     this.sobrenome = partes[1] || '';
//   }
// }
// ====================================================================

// Escreva seu código abaixo:


