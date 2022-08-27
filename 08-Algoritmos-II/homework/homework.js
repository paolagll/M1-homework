'use strict'
// No cambies los nombres de las funciones.

function quickSort(array,) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let numRan = Math.random()*(array.length-1);
  for (let i = 0; i < array.length; i++) {
    if(array[i] < array[numRan]){
      let izq = [];
      izq.push(array[i]);
      izq = quickSort(izq);
    } else if (array[i] > array[numRan]){
      let der =[];
      der.push(array[i]);
      der = quickSort(der);
    } else if (array[i] === array[numRan]){
      let eq = array[i];
    }
    
  } 
  return 
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
