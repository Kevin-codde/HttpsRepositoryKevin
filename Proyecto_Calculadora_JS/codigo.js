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

/*EVENTOS EN BOTONES NUMEROS*/

b = document.querySelectorAll('.boton');

for(i=0;i<=9;i++){
    b[i].addEventListener('click',function(){
        pant.value = this.value;        
    })
    
}; 

