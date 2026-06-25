// Exercício 092: Crypto - Criptografia Simétrica
// Objetivo: Codificar e decodificar dados de forma segura usando chave privada com cifras criptográficas.
//
// Instruções:
// 1. Importe o módulo `crypto`. Use o algoritmo "aes-256-cbc".
// 2. Gere uma chave secreta de 32 bytes (`crypto.randomBytes(32)`) e um vetor de inicialização (IV) de 16 bytes (`crypto.randomBytes(16)`).
// 3. Crie um cifrador usando `crypto.createCipheriv('aes-256-cbc', chave, iv)`. Encripta o texto "Segredo super confidencial!" e salve o resultado hexadecimal.
// 4. Crie um decifrador usando `crypto.createDecipheriv('aes-256-cbc', chave, iv)`. Decifre a mensagem criptografada e converta de volta para UTF-8.
// 5. Imprima no console o texto cifrado (em hex) e o texto decifrado.
//
// Saída esperada no terminal:
// Texto Criptografado: [hex]
// Texto Descriptografado: Segredo super confidencial!
//
// Para executar este arquivo, use o comando: node ex092.js

// Escreva seu código abaixo:

