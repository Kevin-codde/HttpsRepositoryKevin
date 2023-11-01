/*Codigo de calculadora
KEVIN ANDRES BEJARANO TELLO
MIERCOLES 25 OCT 2023
*/


const boton = document.getElementById('btn_on');
let cont_b = document.querySelector(".content-bton");
let pant = document.querySelector(".screen");



function colocarOp(num){
    
    switch(num){
        case 0: pant.value = 0; break 
        case 1: pant.value = 1; break
        case 2: pant.value = 2; break
        case 3: pant.value = 3; break
        case 4: pant.value = 4; break
        case 5: pant.value = 5; break
        case 6: pant.value = 6; break
        case 7: pant.value = 7; break
        case 8: pant.value = 8; break
        case 9: pant.value = 9; break
        default: console.log(NaN);
    }
    
    
}

function f_operacion(op){
    a = 1;
    b = 2; 
    switch(op){
        case '+': resultado = a + b; break 
        case '-': resultado = a - b; break
        case '*': resultado = a * b; break
        case '/': resultado = a / b; break
    }

   
}

function mostrar_resultado(){
    pant.value =  resultado;
}

boton.addEventListener("click",()=>{
    boton.hidden = true;
    pant.hidden = false;
    botones = [];
    l_b = []
    for(i=0;i<=9;i++){
     botones[i] = `<button class= "boton"  id="b${i}" value=${i}>${i}</button>`
     botones[10] = `<button class= "boton" id="${"+"}" value=${"+"}>+</button>`
     botones[11] = `<button class= "boton" id="${"-"}" value=${"-"}>-</button>`
     botones[12] = `<button class= "boton" id="${"*"}" value=${"*"}>*</button>`
     botones[13] = `<button class= "boton" id="${"/"}" value=${"/"}>/</button>`
     botones[14] = `<button class= "boton" id="${"="}" value=${"="}>=</button>`
            
    }
       cont_b.innerHTML += botones;

     b = document.querySelectorAll('.boton');
     b[0].addEventListener('click',()=>{colocarOp(parseInt(b[0].value))})
     b[1].addEventListener('click',()=>{colocarOp(parseInt(b[1].value))})
     b[2].addEventListener('click',()=>{colocarOp(parseInt(b[2].value))})
     b[3].addEventListener('click',()=>{colocarOp(parseInt(b[3].value))})
     b[4].addEventListener('click',()=>{colocarOp(parseInt(b[4].value))})
     b[5].addEventListener('click',()=>{colocarOp(parseInt(b[5].value))})
     b[6].addEventListener('click',()=>{colocarOp(parseInt(b[6].value))})
     b[7].addEventListener('click',()=>{colocarOp(parseInt(b[7].value))})
     b[8].addEventListener('click',()=>{colocarOp(parseInt(b[8].value))})
     b[9].addEventListener('click',()=>{colocarOp(parseInt(b[9].value))})
     b[10].addEventListener('click',()=>{f_operacion(b[10].value)});
     b[11].addEventListener('click',()=>{f_operacion(b[11].value)});
     b[12].addEventListener('click',()=>{f_operacion(b[12].value)});
     b[13].addEventListener('click',()=>{f_operacion(b[13].value)});
     b[14].addEventListener('click',()=>{mostrar_resultado()});
     
    
   
});

