/*Codigo de calculadora
KEVIN ANDRES BEJARANO TELLO
MIERCOLES 25 OCT 2023
*/


const boton = document.getElementById('btn_on');
let cont_b = document.querySelector(".content-bton");
let pant = document.querySelector(".screen");
let entrada_A = document.querySelector(".ent_A");
let entrada_B = document.querySelector(".ent_B");


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
n = []

cn = 0;


for(i=0;i<=9;i++){
    b[i].addEventListener('click',function(){
        pant.value += this.value;
        entrada_A.value = pant.value[0] 
        entrada_B.value = pant.value[1] 
        n[0] = entrada_A.value;
        n[1] = entrada_B.value;    
        
    })  
   
}; 

b[14].addEventListener('click',()=>{
    a = parseFloat(n[0]);
    b = parseFloat(n[1]);
    suma = a + b;
    pant.value = suma;
})