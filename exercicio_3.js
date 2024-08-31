// faturamento diario
let faturamentoDiario = [1200.50, 1450.75, 980.30, 1100.00, 1300.90, 1250.60, 1400.80];

// maior valor no mes
let maiorFaturamento = Math.max(...faturamentoDiario);
console.log("Maior faturamento:", maiorFaturamento)

// menor valor no mês
let menorFaturamento = Math.min(...faturamentoDiario);
console.log("Menor faturamento:", menorFaturamento)

// soma de todos os valores no mes
let soma = 0
for (let i = 0; i< faturamentoDiario.length; i++){
    soma += faturamentoDiario[i]
}

// calculo da média
let resultado = soma / faturamentoDiario.length
console.log("Média Mensal: "+resultado)

// contagem de valores acima da média
let acumulado_valores = []
for (let item of faturamentoDiario) {
    if (item > resultado){
        acumulado_valores.push(item)
    }
}

console.log("Quantidade de Dias Maior que a Média: "+acumulado_valores.length)