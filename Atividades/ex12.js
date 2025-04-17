var prompt = require('prompt-sync')();

const OsNomes = prompt("Digite os nomes separados por vírgula👍 ");

const nomes = OsNomes.split(","); 


const sortear = nomes[Math.floor(Math.random() * nomes.length)];

console.log("Nome sorteado:", sortear.trim());
