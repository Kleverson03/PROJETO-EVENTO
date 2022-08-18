let dataAtual = new Date(2022, 7, 15)
let dataEvento = new Date(2022, 9, 10)
let listaParticipantes = ["Jorge, Artur, Amanda, Josiane, Marcos, Leticia"]
let IdadeParticipante = 20

if (dataEvento > dataAtual) {
    console.log("Evento agendado")
}
else {
    console.log("Evento nao agendado")
}
console.log("-------------------------------------")
if (IdadeParticipante >= 18) {
    console.log("Idade valida")
}
else { console.log("Idade nao permitida") }
console.log("-------------------------------------")
console.log(listaParticipantes)
console.log("-------------------------------------")
if (listaParticipantes.length < 100) {
    console.log("Cadastro permitido")
}
else { console.log("Numero de participantes excedido") }
