class tareas25{
//
//
//
//EJERCICIOS 1
sumardosnumeros(){
console.log("SUMAR DOS NUMEROS SIEMPRE Y CUANDO EL PRIMERO SEA MAYOR AL SEGUNDO (1)")
let num1 = 8;
let num2 = 5;
let resultado;

if (num1 > num2) {
  resultado = num1 + num2;
} else {
  resultado = "El primer número debe ser mayor que el segundo.";
}

console.log(resultado);
}
//
//
//
//
//EJERCICO 2
operaciones(){
console.log("REALIZAR UNA OPERACION SEGUN EL OPERADOR(+,-,*,/,%) REALIZAR LA SUMA, RESTA, MULTIPLICACION, DIVISION y RECIDUO (2)")
class operaciones{
  suma(){
      let n1=4,n2=8,s=0
      s=n1+n2
      console.log(`${n1}+${n2}= ${s}`)
  }
  resta(){
      let n1=20,n2=15,r=0
      r=n1-n2
      console.log(`${n1}-${n2}=${r}`)
  }
  multiplicacion(){
      let n1=10,n2=5,m=0
      m=n1*n2
      console.log(`${n1}*${n2}= ${m}`)
  }
  division(){
      let n1=57,n2=6,d=0
      d=n1/n2
      console.log(`${n1}/${n2}= ${d}`)
  }
  reciduo(){
      let n1=20,n2=6,re=0
      re=n1%n2
      console.log(`${n1}%${n2}= ${re}`)
  }
}
let cal1= new operaciones()
cal1.suma()
let cal2= new operaciones()
cal2.resta()
let cal3= new operaciones()
cal3.multiplicacion()
let cal4= new operaciones()
cal4.division()
let cal5= new operaciones()
cal5.reciduo()
}
//
//
//
//
//EJERCICIO 3
MAYOR(){
console.log("PRESENTAR EL MAYOR DE DOS NUMEROS (3)")
let nume1 = 10;
let nume2 = 5;

if(nume1 > nume2) {
  console.log(nume1 + " es mayor que " + nume2);
} else {
  console.log(nume2 + " es mayor que " + nume1);
}
let numer1 = 10;
let numer2 = 5;

let mayor = (nume1 > nume2) ? nume1 : nume2;

console.log("El número mayor es " + mayor);
}
//
//
//
//
//EJERCICIO 4
nombre(){
console.log("DADO UN NOMBRE PRESENTARLO (4)")
let nombre = "Ramos";
console.log("El nombre es: " + nombre + "");
}
//
//
//
//
//EJERCICIO 5
compraiva(){
console.log("DADO UN VALOR DE COMPRA PRESENTA EL TOTAL CONSIDERANDO UN 12% DE IVA (5)")
let valorCompra = 57;
let iva = valorCompra * 0.12;
let total = valorCompra + iva;
console.log("El total de la compra con IVA es: $" + total.toFixed(2));
}
//
//
//
//
//EJERCICIO 6
presenta5veces(){
console.log("Presentar 5 veces un nombre (6)");
let nombree=["A","n","g","e","l"]
let longitud= nombree.length
let cont=0
let c=0
while(c<5){
    cont=0
while(cont<longitud){
    console.log(nombree[cont]);
    cont=cont+1
}
c=c+1
}
}
//
//
//
//
//EJERCICIO 7
MULTIPLOS(){
console.log("PRESENTAR LOS NUMEROS MULTIPLOS DE 3 DEL 3 AL 21 (7)")
for (let i = 3; i <= 21; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
}
//
//
//
//
//EJERCICIO 8
multiplos(){
console.log("PRESENTAR LOS NUMEROS MULTIPLOS DE 3 DEL 21 AL 3 (8)")
for(let i = 21; i >= 3; i--) {
  if(i % 3 === 0) {
    console.log(i);
  }
}
}
//
//
//
//
//EJERCICIO 9
nombrediferentes(){
console.log("DADOS DOS NOMBRES INDICAR SI SON IGUALES O DIFERENTES (9)")
let nombre1 = "ANGEL";
let nombre2 = "ANGEL";

if (nombre1 == nombre2) {
  console.log("Los nombres son iguales");
} else {
  console.log("Los nombres son diferentes");
}
}
//
//
//
//
//EJERCICIO 10
dadodieznumeros(){
console.log("DADO DIEZ NUMEROS EN UN ARREGLO PRESENTAR LOS QUE TENGAN MENOS DE 5 CARACTERES (10)")
// Definir un arreglo de números
const numeros= [123457, 3654, 1, 45600, 789, 14, 1025, 693, 11, 47896];
// Recorrer el arreglo y presentar los números que tienen menos de 5 caracteres
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i].toString().length < 5) {
    console.log(numeros[i]);
  }
}
}
//
//
//
//
//EJERCICIO 11
arreglos(){
console.log("DADO UN ARREGLO PRESENTAR SUS ELEMENTOS (11)")
// Definir un arreglo
const miArreglo = [25, 200, 1, 69, 18];
// Recorrer el arreglo y mostrar cada elemento en la consola
for (let i = 0; i < miArreglo.length; i++) {
  console.log(miArreglo[i]);
}
}
//
//
//
//
//EJERCICIO 12
menoresa10(){
console.log("DADO UN ARREGLO DE NUMEROS PRESENTAR LOS MENORES A 10 (12)")
const numerosss = [9, 5, 55, 1, 208, 8, 15, 77];
const numerosMenoresA10 = [];

for(let i = 0; i < numerosss.length; i++) {
  if(numerosss[i] < 10) {
    numerosMenoresA10.push(numerosss[i]);
  }
}
console.log(numerosMenoresA10); 
}
//
//
//
//
//EJERCICOS 13
presentarimpares(){
console.log("DADO UN ARREGLO DE NUMEROS PRESENTAR LOS IMPARES Y AL FINAL LA SUMA DE LOS PARES (13)")
const Numeros = [5, 2, 13, 12, 3, 6, 78,];
let sumaPares = 0;

for (let i = 0; i < Numeros.length; i++) {
  if (Numeros[i] % 2 !== 0) {
    console.log(Numeros[i]); // si es impar, lo presentamos
  } else {
    sumaPares += Numeros[i]; // si es par, lo sumamos a la variable sumaPares
  }
}

console.log("La suma de los números pares es: " + sumaPares);
}
//
//
//
//
//EJERCICIO 14
primeroymedioyultimo(){
console.log("PRESENTAR EL PRIMERO EL MEDIO Y EL ULTIMO VALOR DE UN ARREGLO (14)")
function presentarValores(arreglo) {
  const primerValor = arreglo[0];
  const ultimoValor = arreglo[arreglo.length - 1];
  const indiceMedio = Math.floor(arreglo.length / 2);
  const valorMedio = arreglo[indiceMedio];
  
  console.log(`El primer valor es: ${primerValor}`);
  console.log(`El valor medio es: ${valorMedio}`);
  console.log(`El último valor es: ${ultimoValor}`);
}
const MiArreglo = [8, 4, 13, 45, 50, 60, 100, 8];
presentarValores(MiArreglo);
}
//
//
//
//
//EJERCICIOS 15
calcularvuelto(){
console.log("CALCULAR EL VUELTO DE UNA COMPRA DADO EL COSTO Y EL PAGO (15)")
// Obtener el costo de la compra y el pago del cliente
let costo = 65.5;
let pago = 70;

// Calcular el vuelto
let vuelto = pago - costo;

// Mostrar el resultado por consola
console.log("El vuelto es: $" + vuelto);
}
//
//
//
//
//EJERCICIO 16
tablademultiplicar(){
console.log("PRESENTAR LA TABLA DE MULTIPLICAR DE CUALQUIER NUMERO DEL 1 AL 12 (16)")
function tablaMultiplicar(numero) {
  // Validamos que el número esté entre 1 y 12
  if (numero < 1 || numero > 12) {
    console.log("El número debe estar entre 1 y 12.");
    return;
  }
  
  // Creamos la tabla de multiplicar
  for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
// Llamamos a la función y pasamos el número que queremos multiplicar
tablaMultiplicar(9); 
}
//
//
//
//
//EJERCICIO 17
multiplicacionde2numeros(){
console.log("Realizar la multiplicacion de dos numeros por medio de sumas sucesivas (17)")
let nums1 = 5;
let nums2 = 3;
let resultadoss = 0;

for (let i = 0; i < nums2; i++) {
  resultadoss += nums1;
}

console.log("El resultado de la multiplicación es: " + resultadoss);
}
//
//
//
//
//EJERCICIO 18
divisionde2numeros(){
console.log("REALIZAR LAS DIVISION DE DOS NUMEROS POR MEDIO DE RESTAS SUCESIVAS (18)")
function division(dividendo, divisor) {
  let cociente = 0;
  let residuo = 0;
  
  while(dividendo >= divisor) {
    dividendo -= divisor;
    cociente++;
  }
  
  residuo = dividendo;
  
  return { cociente, residuo };
}
console.log(division(5, 2)); 
}
//
//
//
//
//EJERCICIO 19
factorial(){
console.log("CALCULAR EL FACTORIAL DE UN NUMERO (19)")
    let n=Math.floor (Math.random()*5);
    let n1=n
    let contes=n
    let re=0
    while(contes>1){
    contes=contes-1
    re=n*contes
    console.log(n,"*",contes);
    n=n*contes
      

    }
    console.log("el factorial de ",n1," es ",re);
  }
//
//
//
//
//EJERCICIO 20
calcularexponente(){
console.log("CALCULAR EL EXPONENTE DE UN NUMERO (20)")
let nume=Math.floor (Math.random()*10);
let exp=Math.floor (Math.random()*5);
let conte=0
let resul=1
while(conte<exp){
conte=conte+1
resul=resul*nume
}
console.log(nume," elevado a ",exp," es ",resul);
}
//
//
//
//
//EJERCICIO 21
fibonacci(){
console.log("CALCULAR LA SERIE DE FIBONACCI DADO UN NUMERO (21)")
function fibonacci(num) {
  var fib = [0, 1];
  for (var i = 2; i < num; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}
console.log(fibonacci(8)); 
}
//
//
//
//
//EJERCICIO 22
numeroinvertidos(){
console.log("DADO UN NUMERO INVERTIRLO (22)")
let num = 1235678910;
let numStr = num.toString(); // Convertir a cadena
let numArr = numStr.split(''); // Separar caracteres en un array
let numArrRev = numArr.reverse(); // Revertir el orden del array
let numRev = numArrRev.join(''); // Unir los caracteres en una cadena
console.log(numRev); // Salida
}
//
//
//
//
//EJERCICIO 23
devisoresdeunnumero(){
console.log("PRESENTAR LOS DIVISORES DE UN NUMERO (23)")
function obtenerDivisores(nums) {
  var divisores = [];

  for (var i = 1; i <= nums; i++) {
    if (nums % i === 0) {
      divisores.push(i);
    }
  }

  return divisores;
}

// Ejemplo de uso
var nums = 10;
var resultados = obtenerDivisores(nums);
console.log(resultados); 
}
//
//
//
//
//EJERCICIO 24
numeroprefecto(){
console.log("Presentar si un numero es perfecto o no (24)")
function esPerfecto(num) {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  if (suma === num) {
    return "es perfecto";
  } else {
    return "no es perfecto";
  }
}

console.log(esPerfecto(28)); 
}
//
//
//
//
//EJERCICIO 25
numerosprimos(){
console.log("Verfificar si un numero es primo o no Primo cuando solo es divsivible para 1 y el propio numero es decir no tenga divisores (25)")
function esPrimo(num) {
  if (num < 2) {
    return "No es primo";
  }
  
 
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "No es primo";
    }
  }
  
   
return "Es primo";
}

console.log(esPrimo(7));
}

}
let tarea= new tareas25()
tarea.sumardosnumeros()
tarea.operaciones()
tarea.MAYOR()
tarea.nombre()
tarea.compraiva()
tarea.presenta5veces()
tarea.MULTIPLOS()
tarea.multiplos()
tarea.nombrediferentes()
tarea.dadodieznumeros()
tarea.arreglos()
tarea.menoresa10()
tarea.presentarimpares()
tarea.primeroymedioyultimo()
tarea.calcularvuelto()
tarea.tablademultiplicar()
tarea.multiplicacionde2numeros()
tarea.divisionde2numeros()
tarea.factorial()
tarea.calcularexponente()
tarea.fibonacci()
tarea.numeroinvertidos()
tarea.devisoresdeunnumero()
tarea.numeroprefecto()
tarea.numerosprimos()






































































































