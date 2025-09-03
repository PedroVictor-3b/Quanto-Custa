//FUNÇÃO QUE CALCULA O PREÇO

export function calcularPreco(preco, peso) {
    preco = parseFloat(preco.replace(",", "."));
    peso = parseFloat(peso.replace(",", "."));

    const total = preco * peso

    return total.toFixed(2)
}
