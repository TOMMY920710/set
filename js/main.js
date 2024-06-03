
/*
let producto = {
    nombre:"Camiseta",
    precio:30000,
    cantidadDisponible:"disponible"
}


producto.nombre="Zapatillas";// reasignamos el valor de una propiedad

producto.categoria="calzado";// creamos una nueva propiedad

delete producto.cantidadDisponible ; // eliminamos una propiedad

console.log(producto);

*/

/*
console.log(document.body);
*/
 


//getElementById nos permite traer un elemento html por medio del id

/*
const divContenedor = document.getElementById("contenedor");

console.log(divContenedor);
*/



// getElementByClassName

//const divCaja = document.getElementsByClassName("caja");
/*
console.log(divCaja);
*/

// acceder indice array manualmente 
/*
console.log(divCaja[1]);
console.log(divCaja[2]);
*/

// recorriendo html collection con bucle for 

/*
for(let i =0;i<divCaja.length;i++){
    console.log(divCaja[i]);
}

*/


// getElementsByTagName nos permite traer un html collection por medio de el nombre de la etiqueta 
/*
const section = document.getElementsByTagName("section");

console.log(section);
*/
// ingresando al indice de manera manual 
/*
console.log(section[0]);
*/
// recorriendo por medio de un bucle for 
/*
for(let i=0;i < section.length;i++){
    console.log(section[i]);
}
*/

/*
const alquilar_peli = document.getElementById("alquilar");
const devolver_peli = document.getElementById("devolver");
const disponible = document.getElementById("renta");
const carrito = document.getElementById("carrito");

function alquilar(){
    alert(" peli alquilada");
    disponible.innerText ="no disponible";// inserta texto 
    carrito.innerHTML= '<li class="item">jurassic park</li>';// insertar un elemnto html 
}


function devolver(){
    alert("gracias por devolver la peli ");
    disponible.innerText="disponible";
    carrito.innerHTML=' ';
}



*/

/*
const precio = document.getElementById("precioProducto");
const boton =  document.getElementById("boton");

function descuento(){
    precio.innerText = "Precio: $450"
}

*/




