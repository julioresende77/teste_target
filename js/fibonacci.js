function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function verificaFibonacci(numero) {
    let sequencia = fibonacciSequence(numero);
    if (sequencia.includes(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }
}

// Você pode informar o número desejado aqui
let numeroInformado = 21;
verificaFibonacci(numeroInformado);