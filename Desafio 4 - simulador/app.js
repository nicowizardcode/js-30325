/*let numero1;
let numero2;
let resultado;
*/
function calculoIva (valor){

    let numero1 = parseFloat(prompt("Ingrese un valor"));
    let numero2 = parseFloat(prompt("Ingrese un valor")); 
    
    //parseFloat(document.getElementById("numero2").ariaValueMax);

    let resultado = (numero1 + numero2)*1.21;
    alert ("El valor total con iva es: " + resultado + "$ (pesos) ");
}

calculoIva();
calculoIva();
calculoIva();
calculoIva();