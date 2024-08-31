let faturamentos = ["SP - 67836.43", "RJ - 36678.66", "MG - 29229.88", "ES - 27165.48", "OUTROS - 19849.53"]

let total = 0
let valores = []
let estados = []

// faz a separação entre estados e valores
for (let i = 0; i < faturamentos.length; i++) {

    let parts = faturamentos[i].split(' - ')
    let converte_numeros = Number(parts[1])
    let separa_estados = parts[0]
    estados.push(separa_estados)
    valores.push(converte_numeros)

    // faz a soma de todos os valores dentro do vetor
    total += valores[i]
}


// faz o calculo da porcentagem
for (let i = 0; i < estados.length; i++) {

    let porcentagem = valores[i] / total * 100
    console.log(estados[i] + " - " + porcentagem.toFixed(2)+"%")

}
  
console.log("Total = "+total)