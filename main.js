const yourName = document.getElementById ('name');
const submitBtn = document.getElementById ('submitBtn');
const yourEmail = document.getElementById ('email');
const comentario = document.getElementById ('comentario');



function onSubmit(event){
    event.preventDefault()
    const valueNombre = yourName.value
    const valueEmail = yourEmail.value
    const valueComentario = comentario.value
    
    localStorage.setItem('user', JSON.stringify({
        Nombre: valueNombre,
        Email: valueEmail,
        Comentario: valueComentario

    }))
    
    const user = JSON.parse(localStorage.getItem('user'))
    const h1 = document.createElement("h1")
    h1.textContent = "se han guardado los datos de: " + user.Nombre
    document.body.appendChild(h1)
    
   
    
    /* 
    localStorage.setItem('Nombre',valueNombre)
    localStorage.setItem('Email',valueEmail)
    localStorage.setItem('Comentarios',valueComentario)
 
    localStorage.getItem('Nombre',valueNombre)
    localStorage.getItem('Email',valueEmail)
    localStorage.getItem('Comentarios',valueComentario) */

};
submitBtn.addEventListener("mouseup",onSubmit);
