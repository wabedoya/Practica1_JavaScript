const form = document.querySelector('#formIndex');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const btn= document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
/*form.addEventListener('submit',sumar);

function sumar(event){
    const suma = (parseInt(n1.value) + parseInt(n2.value));
    event.preventDefault();
    result.innerHTML = " el resultado de la suma es: "+ suma 
}*/
btn.addEventListener('click',sumar);

function sumar(){
    const suma = (parseInt(n1.value) + parseInt(n2.value));
    result.innerHTML = " el resultado de la suma es: "+ suma 
}