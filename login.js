//* SELECTORES:
const formL = document.querySelector('#form-login');
const inputL = document.querySelector('#login-input');
const notificacion = document.querySelector('.notification');

//* EVENTOS:

formL.addEventListener('submit', async e=>{
    e.preventDefault();

    const respuesta = await fetch('http://localhost:3000/admin', {
        method: 'GET'
    });

    const administrador = await respuesta.json();

    const admin = administrador.find(i=>i.nombre === inputL.value);

    //validar:
    if(!admin){
        //si no existe
        notificacion.innerHTML = 'El usuario no existe';
        notificacion.classList.add('show-notification');
        setTimeout(()=>{
            notificacion.classList.remove('show-notification');
        }, 2500);
    }else{
        //si existe, debe tomar el valor y guardarlo en el localstorage
        localStorage.setItem('user', JSON.stringify(admin))
        window.location.href = '/index.html';
    }

})