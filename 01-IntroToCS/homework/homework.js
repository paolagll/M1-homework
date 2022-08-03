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
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}