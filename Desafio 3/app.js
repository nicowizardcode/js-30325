/*Tomando como base los ejemplos anteriores de la estructura for y while, 
crear un algoritmo que repita un bloque de instrucciones. 
En cada repetición es necesario efectuar una operación o comparación 
para obtener una salida por alerta o consola.*/



let cant_alumnos = parseInt(prompt("Indique la cantidad de alumnos: "));
let edad_alumnos;
let total_edades=0;
let n;
let prom;

for(n=1;n<=cant_alumnos;n++){
    edad_alumnos = parseInt(prompt("Ingrese la edad del alumno "+n));
    total_edades = total_edades + edad_alumnos; 
    prom = parseInt(total_edades/cant_alumnos);
}

alert("El promedio de las edades de los " +cant_alumnos+ " alumnos es: " +prom);

/*
let numero1 = 2;
let numero2 = 8;

let resultado = numero1 + numero2;

console.log(resultado);*/