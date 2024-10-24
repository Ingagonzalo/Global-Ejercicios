let usuario = prompt("Ingrese su usuario").toString();
let edad = parseInt(prompt("Ingrese su edad"));

console.log("Su usuario es " + usuario + " y su edad es " + edad);
alert("Su usuario es " + usuario + " y su edad es " + edad);

if(usuario == ""){
    alert("Usted no ingreso un usuario")
}
else{
    alert("Su usuario es "+ usuario)
    let confirmacion = confirm("¿Deseas cambiar de usuario?")
    if (confirmacion == true){
        usuarioNuevo = prompt("Ingrese su nuevo usuario").toString();
        if(usuario == usuarioNuevo){
            alert("Su usuario no puede ser el mismo")
        }
        else{
            alert("Su usuario es " + usuarioNuevo );
        }
    }
    else{
        alert("Su usuario es " + usuario );
    }
}

