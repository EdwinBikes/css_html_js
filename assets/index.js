let formulario =[];


function agregar(){
    // let nombre = document.setElementById('nombre')
    nombre.value
    console.log(nombre);
    formulario.push(nombre);
    localStorage.setItem(formulario);
    console.log(formulario);
    alert(localStorage.getItem(formulario));
}
