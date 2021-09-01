let alimentos = ["arroz", "laranja", "melancia", "pastel"];
let brinquedos = ["carrinho", "bola", "raquete", "furby"];

let escolhaLista = prompt("Qual tipo de produto você gostaria de ver? Brinquedos ou Alimentos?") 

if (escolhaLista === "Brinquedos") {
    console.log("Lista de Brinquedos: ", brinquedos)
} else if (escolhaLista === "Alimentos") {
    console.log("Lista de Alimentos: ", alimentos)
} else {
    console.log("Produto não encontrado")
}

let escolhaCompra = prompt("O que deseja comprar? Brinquedos ou Alimentos?")

if (escolhaCompra === "Brinquedos") {
    confirm("Comprar Brinquedos?")
    for (let i = 0; i <1; i++) {
        console.log("Você comprou", brinquedos[0])
        console.log("Você comprou", brinquedos[1])
        console.log("Você comprou", brinquedos[2])
        console.log("Você comprou", brinquedos[3])
        escolhaCompra++
    }
} else if(escolhaCompra === "Alimentos") {
    confirm("Comprar Alimentos?")
    for (let i = 0; i <1; i++) {
        console.log("Você comprou", alimentos[0])
        console.log("Você comprou", alimentos[1])
        console.log("Você comprou", alimentos[2])
        console.log("Você comprou", alimentos[3])
        escolhaCompra++
    }
} else {
    console.log("Volte sempre!")
}