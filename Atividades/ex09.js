function verificarPalindromo(palavra) {
    const PalavraRev = palavra.split('').reverse().join('');
    return palavra === PalavraRev;
  }

  console.log(verificarPalindromo('Leão'));
  console.log(verificarPalindromo('Sagui'));
  console.log(verificarPalindromo('Sarue')); 
  console.log(verificarPalindromo('ovoDePascoa')); 
  