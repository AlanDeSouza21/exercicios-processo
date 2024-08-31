let entrada_string = document.getElementById('entrada_string')


function inverter(){

    // tratamento do valor de entrada
    let valor_entrada = entrada_string.value

    // conversão para vetor
    let separa_string = valor_entrada.split("")

    // tamanho do vetor
    let reduzir = separa_string.length - 1


    let string_invertida = []

    // insere as letras em ordem invertida dentro do vetor 'string invertida'
    for (let i = 0; i < separa_string.length; i++) {

        let resultado = separa_string[reduzir--]
        string_invertida.push(resultado)

    }

    // transforma o conteúdo do vetor 'string invertida' em uma string 
    let string_junta = string_invertida.join("")

    // faz a criação dos elementos filhos que mostram o resultado na tela para o usuario
    let minhaSection = document.getElementById('strings_invertidas')

    let novoParagrafo = document.createElement('p')

    novoParagrafo.textContent = `Valor Entrada: ${entrada_string.value} / Valor Saída ${string_junta}`

    minhaSection.appendChild(novoParagrafo)

}
