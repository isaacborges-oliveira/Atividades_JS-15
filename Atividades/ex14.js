var prompt = require('prompt-sync')();
let data = prompt("Digite uma data no formato YYYY-MM-DD: ");

let divisao = data.split("-");

let dataDividida = divisao.reverse();

let dataInversa = dataDividida.join("-");

console.log("Data com ano e dia invertidos: " + dataInversa);