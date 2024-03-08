function inverteString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Você pode informar a string desejada aqui
let stringOriginal = 'Hello, World!';
let stringInvertida = inverteString(stringOriginal);
console.log(stringInvertida);