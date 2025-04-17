
function removerCaracteresEspeciais(texto) {
    return texto.replace(/[^a-zA-Z0-9\s]/g, '');
  }
  
  console.log(removerCaracteresEspeciais('Olá, Mundo. Como vai?'));