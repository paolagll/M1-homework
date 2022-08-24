'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
//   let arr= [];
//   var div = 2
//   if(num % div === 0){
//     arr.push(div);
//     num = num / div;
//     return factorear(num);
//   } else if(num === 1) return arr;
//   else {
//     div++;
//     return factorear(num);
// }
var arrayfactor = [1];
  for (let i = 2; i <= num; i++){
    while(num%i === 0){
      arrayfactor.push(i);
      num=num/i;
    };
  };
  return arrayfactor
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0 ; j < array.length; j++){
    for (let i = 0 ; i < array.length-j; i++){
      if (array[i] > array[i+1]){
        [array[i],array[i+1]] = [array[i+1],array[i]];
        };
    };
  };
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let array2 = array.length
  for (let i = 1; i < array2; i++) {
    let actual = array[i];
    let j = i -1;
    while (actual < array [j] && j >= 0) {
      array[j + 1] = array [j];
      j--;
    };
    array[j+1]= actual;
  };
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // let arr2 =[]
  // for (let i = 0; i < array.length; i++) {
  //   if(array[i] < array[i++]){
  //     let min = array[i];
  //     arr2.push(min);
  //   }
  //   return arr2;
  // }
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
