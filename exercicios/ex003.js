// Exercício 003: Argumentos de linha de comando
// Objetivo: Ler argumentos passados via terminal usando o objeto global `process.argv`.
//
// Instruções:
// Quando executamos um arquivo Node.js, podemos passar parâmetros. Ex: `node ex003.js Maria`
// O array `process.argv` contém esses argumentos (os dois primeiros elementos são o caminho do Node e do arquivo).
// Escreva um programa que pegue o terceiro elemento (índice 2) de `process.argv` (que será o nome enviado)
// e imprima no console: "Olá, [nome recebido]!".
// Se nenhum nome for fornecido, imprima "Olá, visitante!".
//
// Saída esperada no terminal ao rodar `node ex003.js Maria`:
// Olá, Maria!
//
// Para executar este arquivo, use o comando: node ex003.js SeuNome
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Ler uma cor favorita do usuário via terminal (process.argv).
// Exemplo de execução: node ex003.js azul
//
// const cor = process.argv[2];
// if (cor) {
//   console.log(`Cor informada: ${cor}`);
// } else {
//   console.log("Nenhuma cor informada.");
// }
// ====================================================================

// Escreva seu código abaixo:

const nome = process.argv[2]
if (nome) {
    console.log (`Olá ${nome}`)
} else {
    console.log("Nenhum nome encntrado.")
}