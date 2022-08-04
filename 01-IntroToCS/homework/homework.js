'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var bin = String(num).split('').reverse();
  var dec = 0 ;
  for (let i = 0; i < bin.length; i++) {
    dec = dec + bin[i]*2**i;
  }
  return dec;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];
  //Dividimos num entre 2 hasta llegar a 0
  while(num > 0){ //mientras num sea menor a 0 lo divido por 2
    bin.push(num % 2); //1ero el resto de num lo pusheo al array
    num= Math.floor(num/2); // luego num pasa a ser el resultado de la division
  }
  return bin.reverse().join(''); // retorno el array al reves y como string
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}