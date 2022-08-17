const hoje = new Date();
dataEvento = new Date("2022 - 08 - 17");

console.log("--------------");

console.log("Insira a data do evento AAAA/MM/DD");

if (dataEvento > hoje) { console.log("Cadastro do evento permitido") }
else { console.log("Cadastro do evento não permitido") };

console.log("--------------");

let idade = 18
console.log("Insira sua idade")
if (idade >= 18) { console.log("Cadastro  permitido ") }
else { "Cadastro não permitido" }

console.log("--------------");

var listadeparticipantes = 100
if (listadeparticipantes <= 100) { console.log("Cadastro realizado com sucesso") }
else { "Cadastro não realizado - lista de participantes excedida" }




