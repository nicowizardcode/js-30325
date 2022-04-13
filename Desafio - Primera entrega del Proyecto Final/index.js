//Desafio Arrays

// Crear un array de producto (para almacenar objetos)
const arrayProductos = [];
// Constructor vinos
// ? Combinamos el array con los objetos creados
class Vino {
    constructor(bodega,uva,tipo,precio){
        this.bodega = bodega;
        this.uva = uva;
        this.tipo = tipo;
        this.precio = precio;
    }
    quePrecioTiene(){
        alert(this.precio);
    }
}



const vino1 = new Vino ("Marques","Malbec","Tinto",600);
arrayProductos.push(vino1);
const vino2 = new Vino ("Pinot","Cabernet","Tinto",750);
arrayProductos.push(vino2);
const vino3 = new Vino ("Mount Veeder","Torrontes","Tinto",900);
arrayProductos.push(vino3);
const vino4 = new Vino ("San Filippo","Sauvignon ","Tinto",1250);
arrayProductos.push(vino4);
const vino5 = new Vino ("Massolino ","Malbec Rose","Rose",350);
arrayProductos.push(vino5);

// El usuario elige su vino
console.log("Estos son los vinos que tenemos:");
for(let vin of arrayProductos){
    console.log(vin.uva);
}
let encontrado = false;
let carrito = prompt("¿Que tipo de uva quiere comprar?");
for(let vin of arrayProductos){
    if(carrito.toUpperCase() == vin.uva){
        encontrado = true;
        alert("El vino que has elegido cuesta: " + vin.precio);
    }
}
if(encontrado != true){
    alert("Esta uva no lo tenemos");
}

//Calcular el precio total
let precioTotal = 0;
while(carrito.toUpperCase() != "ESC"){
    for(let vin of arrayProductos){
        if(carrito.toUpperCase() == vin.uva){
            vin.quePrecioTiene();
            precioTotal = precioTotal + vin.precio;
            console.log("Precio total -->" + precioTotal);
        }
    }
    carrito = prompt("¿Que tipo de uva quiere comprar?");
}

alert(precioTotal);


