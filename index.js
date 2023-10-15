import { eliminarProducto, obtenerProductos } from "./api.js"; //<--asi se importan las funciones

//* SELECTORES
const listado = document.querySelector('#listado-Productos');


//* EVENTOS
document.addEventListener('DOMContentLoaded', mostrarProductos);
listado.addEventListener('click', confirmaEliminar);

//* FUNCIONES

async function mostrarProductos(){

    const productos = await obtenerProductos();

    console.log(productos)

    productos.forEach(producto=>{
        const {nombre, precio,categoria,id} = producto;

        const row = document.createElement('tr');
        row.innerHTML += `
        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-warp">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">${nombre}</p>
        </td>

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-warp">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">$${precio}</p>
        </td>

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-warp">
        <p class="text-gray-700 font-medium text-lg font-bold text-sm leading-5">${categoria}</p>
        </td>

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-warp text-sm leading-5">
        <a href="editar-producto.html?id=${id}" class="text-teal-600 mr-5 hover:text-teal-900">Editar</a>
        <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>

        `;
        listado.appendChild(row);

    })
}

async function confirmaEliminar(e){

    e.preventDefault();

    if(e.target.classList.contains('eliminar')){
        const productoId = parseInt(e.target.dataset.producto); //<---dataset es para los ids "temporales" que se colocan como el "data-producto" arriba

        console.log(productoId)

        const confirmar = confirm('¿Quieres eliminar este producto?');

        if(confirmar){
            await eliminarProducto(productoId);
        }
    }
}
