/* Un número es primo si sólo puede dividirse por sí mismo y po la unidad (es decir, no tiene más divisores que él mismo y la unidad).
por ejemplo, 9, 8, 6, 4 , 12, 16, 20, etc., no son primos, ya que no son divisibles por números distintos a ellos mismos y a la unidad.
Así, 9 es divisible por 3, 8 lo es por 2, etc. El algoritmo de resolición del problema para por dividir sucesivamente el número por 2, 2, 4..., etc.*/

var number = 5;
var divisor = 2;
var operation = number % divisor;
if (operation == 0) {
  console.log(operation);
  console.log("El número es primo");
} else {
  console.log(operation);
  console.log("El número no es primo");
}