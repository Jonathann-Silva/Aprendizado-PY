// Exercício 025: Async/Await
// Objetivo: Consumir Promises usando a sintaxe moderna e limpa de Async/Await.
//
// Instruções:
// 1. Crie uma função `obterDadosDoBanco()` que retorna uma Promise. Esta Promise deve ser resolvida após 1.5 segundos com a string "Dados carregados!".
// 2. Crie uma função assíncrona usando a palavra-chave `async`, chamada `executar()`.
// 3. Dentro dela, use `await` para esperar a resolução de `obterDadosDoBanco()` e armazene o resultado em uma variável.
// 4. Imprima no console a frase: "Resultado: [resultado]".
// 5. Não se esqueça de chamar a função `executar()` no final do arquivo.
//
// Saída esperada no terminal (após 1.5 segundos):
// Resultado: Dados carregados!
//
// Para executar este arquivo, use o comando: node ex025.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Aguardar retorno de download simulado usando async/await.
//
// const baixarArquivo = () => new Promise(r => setTimeout(() => r('Arquivo baixado!'), 300));
// async function inicializar() {
//   console.log('Iniciando download...');
//   const msg = await baixarArquivo();
//   console.log(msg);
// }
// inicializar();
// ====================================================================

// Escreva seu código abaixo:


