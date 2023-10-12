import { eliminarProducto, obtenerProductos } from "./api.js"; //<--asi se importan las funciones

//* SELECTORES
const listado = document.querySelector('#listado-Productos');



//(function(){  //<---asi se llama una funcion para que se ejecute automaticamente

//* EVENTOS
document.addEventListener('DOMContentLoaded', mostrarProductos);
listado.addEventListener('click', confirmaEliminar);

//* FUNCIONES

async function mostrarProductos(){
    
    const productos = await obtenerProductos();

    console.log(productos)

    productos.forEach(i=>{
        const {nombre, precio,categoria,id} = i;

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

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-warp">
        <a href="editar-producto.html?id=${id}" class="text-teal-600 mr-5 hover:text-teal-900">Editar</a>
        <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>

        `
        listado.appendChild(row);
    })
}



async function confirmaEliminar(e){

    e.preventDefault();

    if(e.target.classList.contains('eliminar')){
        const productoId = parseInt(e.target.dataset.producto);

        console.log(productoId)

        const confirmar = confirm('¿Quieres eliminar este producto?');

        if(confirmar){
            await eliminarProducto(productoId);
        }
    }
}

//})(); //<---siempre debe cerrarse con estos ()