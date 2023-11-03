/*Codigo de calculadora
KEVIN ANDRES BEJARANO TELLO
MIERCOLES 25 OCT 2023
*/


const boton = document.getElementById('btn_on');
let cont_b = document.querySelector(".content-bton");
let pant = document.querySelector(".screen");


botones = [];
 for(i=0;i<=9;i++){
     botones[i] = `<button class= "boton"  id="b${i}" value=${i}>${i}</button>`
     botones[10] = `<button class= "boton" id="+" value= "+">+</button>`
     botones[11] = `<button class= "boton" id="-" value= "-">-</button>`
     botones[12] = `<button class= "boton" id="*" value= "*" >*</button>`
     botones[13] = `<button class= "boton" id="/" value= "/">/</button>`
     botones[14] = `<button class= "boton" id="=" value= "=">=</button>`
     botones[15] = `<button class= "boton" id="DEL" value="DEL">DEL</button>`

            
}

cont_b.innerHTML += botones;
//ASIGNACION DE BOTONES
let b0 = document.getElementById('b0');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');
let b10 = document.getElementById('+');
let b11 = document.getElementById('-');
let b12 = document.getElementById('*');
let b13 = document.getElementById('/');
let b14 = document.getElementById('=');
let b15 = document.getElementById('DEL');

//EVENTOS EN BOTONES NUMEROS
b0.addEventListener('click',()=>{pant.value = b0.value});
b1.addEventListener('click',()=>{pant.value = b1.value});
b2.addEventListener('click',()=>{pant.value = b2.value});
b3.addEventListener('click',()=>{pant.value = b3.value});
b4.addEventListener('click',()=>{pant.value = b4.value});
b5.addEventListener('click',()=>{pant.value = b5.value});
b6.addEventListener('click',()=>{pant.value = b6.value});
b7.addEventListener('click',()=>{pant.value = b7.value});
b8.addEventListener('click',()=>{pant.value = b8.value});
b9.addEventListener('click',()=>{pant.value = b9.value});

