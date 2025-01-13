/* Calcular el valor de la suma 1+2+3+4+...+100. */
var n = 1;
var suma = 0;
while (n <= 100) {
    suma += n;
    n++;
    console.log(suma);
}
console.log(suma);