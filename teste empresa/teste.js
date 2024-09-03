// 1 Cálculo da Soma

let indice = 13;  // Número até o qual vamos somar
let soma = 0;     // Variável para armazenar a soma

// Loop de 1 até indice (inclusive)
for (let k = 1; k <= indice; k++) {
    soma += k;   
}

console.log(soma);  // Imprime o resultado


// 2 Sequência de Fibonacci

function pertenceAFibonacci(num) {
    if (num < 0) return false;  // Números negativos não estão na sequência
    
    let a = 0;
    let b = 1;
    
    // Gera a sequência até o número informado ou até passar o número
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return a === num;  // Verifica se o número está na sequência
}

// Exemplo de uso
let num = parseInt(prompt("Digite um número:"), 10);
if (pertenceAFibonacci(num)) {
    console.log(num + " pertence à sequência de Fibonacci.");
} else {
    console.log(num + " não pertence à sequência de Fibonacci.");
}


// 3 Análise de Faturamento

const faturamento = [500, 300, 0, 400, 600, 0, 200, 800, 0, 500, 300, 100, 0, 400, 0, 600, 500, 300, 200, 400, 600, 0, 200, 500, 100, 0, 300, 400, 500, 600, 200, 0, 100, 300, 400, 500, 600, 0, 200, 300, 400, 500, 600, 0, 100, 200, 300, 400, 500, 600, 0, 100, 200, 300, 400, 500];

// Variáveis para cálculo
let total = 0;
let diasComFaturamento = 0;
let menor = Number.POSITIVE_INFINITY;
let maior = Number.NEGATIVE_INFINITY;

// Calculando a soma, o menor e o maior valor
for (let i = 0; i < faturamento.length; i++) {
    let valor = faturamento[i];
    if (valor > 0) {
        total += valor;
        diasComFaturamento++;
        if (valor < menor) menor = valor;
        if (valor > maior) maior = valor;
    }
}

const media = total / diasComFaturamento;  // Calcula a média
let acimaDaMedia = 0;

// Conta o número de dias acima da média
for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > media) {
        acimaDaMedia++;
    }
}

console.log("Menor valor de faturamento: R$" + menor.toFixed(2));
console.log("Maior valor de faturamento: R$" + maior.toFixed(2));
console.log("Número de dias acima da média: " + acimaDaMedia);


// 4 Percentual de Representação

const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o total de faturamento
let total = 0;
for (let estado in faturamentoEstados) {
    total += faturamentoEstados[estado];
}

// Calcula o percentual para cada estado
for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(estado + ": " + percentual.toFixed(2) + "%");
}



// 5 Inverter uma String

function inverterString(str) {
    let invertida = '';  // Variável para armazenar a string invertida

    // Adiciona cada caractere ao início da nova string
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    return invertida;
}

// Exemplo de uso
let entrada = prompt("Digite uma string:");
console.log("String invertida:", inverterString(entrada));

