//Accediendo a los inputs
let getData = document.getElementById("inputText");
const btn = document.getElementById("buttonText");

//Guardando el valor del input en el localStorage
btn.addEventListener("click", ()=>{
    localStorage.setItem("data", getData.value);
    console.log(localStorage.getItem("data"));
    getData.value= "";
})