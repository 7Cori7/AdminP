import { obtenerProductos } from "./api.js"; //<--asi se importan las funciones

//* SELECTORES
const listado = document.querySelector('#listado-Productos');

//* EVENTOS
document.addEventListener('DOMContentLoaded', mostrarProductos);

//* FUNCIONES

async function mostrarProductos(){
    const productos = await obtenerProductos();

    console.log(productos)
}