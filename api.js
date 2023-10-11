const url = 'http://localhost:3000/menu';

export const nuevoProducto = async producto => {
    try{
        await fetch(url,{
            method:'POST',
            body:JSON.stringify(producto),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }catch(error){
        console.log(error)
    }
}
export const obtenerProductos = async () => {
    try{
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;
    }catch(error){
        console.log(error)
    }
}

export const producto = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`); //<--- como es extrae un producto se busca por el id en la ruta
        const producto = resultado.json();
        return producto;
    }catch(error){
        console.log(error)
    }
}

export const editarProducto = async producto => {
    try{
        await fetch(`${url}/${producto.id}`,{
            method:'PUT', //<--metodo que actualiza de forma mas especifica (un elemento) usando el id
            body:JSON.stringify(producto),
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }catch(error){
        console.log(error)
    }
}

export const eliminarProducto = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    }catch(error){
        console.log(error)
    }
}

//* Export es para que estas funciones puedan ser utilizadas en otros archivos ya que "exporta" la funcion, luego en otro archivo se le hace "import" y los parametros que necesita la funcion