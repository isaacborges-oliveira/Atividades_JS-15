const frase = "  Esta   frase    tem   espaços   extras   ";

const fraseSemDuplicados = frase.split(" ").filter(palavra => palavra !== "").join(" "); 

console.log(fraseSemDuplicados); 

