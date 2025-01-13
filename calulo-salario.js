/* Calcular la paga neta de un trabajador conociendo el numero de horas trabajadas, la tarifa horaria
y la tasa de impuestos */

let horas = 80;
let valorHora = 20;
let tasaImpuesto = 0.1;

let salarioBruto = horas * valorHora;
let impuestos = salarioBruto * tasaImpuesto;
let salarioNeto = salarioBruto - impuestos;

console.log("Tu salario bruto es: " + salarioBruto);
console.log("Los impuestos son: " + impuestos);
console.log("Tu salario neto es: " + salarioNeto);