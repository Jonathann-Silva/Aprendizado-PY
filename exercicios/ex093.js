// Exercício 093: FS - Alteração de Permissões (chmod)
// Objetivo: Gerenciar privilégios de leitura e escrita do sistema de arquivos usando o Node.js.
//
// Preparação: O script de geração criou um arquivo temporário `arquivo_protegido.txt` nesta pasta.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use a função `fs.chmodSync()` para mudar as permissões do arquivo `arquivo_protegido.txt` para modo somente leitura (valor octal `0o444`).
// 3. Imprima a mensagem: "Permissões alteradas para somente leitura!".
// 4. Tente abrir ou escrever no arquivo em seguida com `fs.writeFileSync()` usando try/catch e comprove que o sistema operacional irá bloquear a escrita disparando um erro de permissão (EACCES ou EPERM). Imprima uma mensagem de erro capturada.
//
// Saída esperada no terminal:
// Permissões alteradas para somente leitura!
// Erro capturado ao tentar gravar: [Erro de permissão]
//
// Para executar este arquivo, use o comando: node ex093.js

// Escreva seu código abaixo:

