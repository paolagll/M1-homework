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
  while(num > 0){
    bin.push(num % 2);
    num= Math.floor(num/2)
  }
  return bin.reverse().join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}