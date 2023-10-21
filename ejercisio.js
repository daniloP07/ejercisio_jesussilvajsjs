let edad = parseInt(prompt("ingrese su edad"));
if(edad>=18){
    alert ("eres mayor de edad");
} else{
    alert ("eres menor de edad");
}


/*ejercisio2*/

let nota1= parseFloat(prompt("ingrese su nota"))
let nota2= parseFloat(prompt("ingrese su nota"))
let nota3= parseFloat(prompt("ingrese su nota"))
promedio = (nota1+nota2+nota3 )/3
if (promedio>=6){
    alert("aprobado");

} else{
alert("reprobado");
}

/*ejercisio3*/

let A = parseFloat(prompt("Ingrese el valor de A"));
let B = parseFloat(prompt("Ingrese el valor de B"));

if (A > B) {
    alert("A es mayor que B");
} else if (A < B) {
    alert("A es menor que B");
} else {
    alert("A es igual a B");
}

/*ejercisio4*/

let peso= parseFloat(prompt("Ingrese su peso"));
if( peso<=40){
   alert ("persona baja de peso");

}
else if (peso >=41 && peso <=70){
   alert ("tienes peso promedio");
}
else {
    alert("persona con sobre peso");
}


/*ejercisio5*/

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));


if (edad1 > edad2) {
    alert(nombre1 + " es mayor que " + nombre2);
} else if (edad2 > edad1) {
    alert(nombre2 + " es mayor que " + nombre1);
} else {
    alert(nombre1 + " y " + nombre2 + " tienen la misma edad.");
}


/*ejercisio6*/

let numero = parseInt(prompt("Ingrese un número entre 1 y 7:"));
let diaSemana;

if (numero === 1) {
   alert( diaSemana = "lunes");

} else if (numero === 2) {
   alert (diaSemana = "martes");
} else if (numero === 3) {
    alert(diaSemana = "miercoles");
} else if (numero === 4) {
    alert(diaSemana = "Jueves");
} else if (numero === 5) {
    alert(diaSemana = "viernes");
} else if (numero === 6) {
    alert(diaSemana = "sabado");
} else if (numero === 7) {
    alert(diaSemana = "domingo");
} else {
   alert( diaSemana = "Número fuera de rango");
}



/*ejercisio7*/

let numero1= parseFloat(prompt("ingrese 1 numero"))
let numero2= parseFloat(prompt("ingrese 2 numero"))
let resultado;
if (numero1 === numero2){
     alert (resultado =numero1 * numero2);
}
else if (numero1 > numero2){
    alert(resultado = numero1 - numero2);

} else{
   alert( resultado = numero1 + numero2);
}
 /*ejercisio8*/

