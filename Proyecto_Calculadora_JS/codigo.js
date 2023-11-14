/*Codigo de calculadora
KEVIN ANDRES BEJARANO TELLO
MIERCOLES 25 OCT 2023
*/


const boton = document.getElementById('btn_on');
let cont_b = document.querySelector(".content-bton");
let pant = document.querySelector(".screen");
let entrada_A = document.querySelector(".ent_A");
let entrada_B = document.querySelector(".ent_B");
let entrada_op = document.querySelector(".ent_op");


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
ln = [];
cn = 0;
ln_B = [];
signo = [];


for(i=0;i<=13;i++){
    b[i].addEventListener('click',function(){
        pant.value += this.value;
        /*
        entrada_A.value = pant.value[0] 
        entrada_op.value = pant.value[1] 
        entrada_B.value = pant.value[2] 
        n[0] = entrada_A.value;
        n[1] = entrada_op.value; 
        n[2] = entrada_B.value;   
        */       
        
    })  
   
}; 

function operar(){
    for(num in pant.value ){
        if(pant.value[num]!= '+' && pant.value[num]!= '-'  && pant.value[num]!= '*'  && pant.value[num]!= '/' ){
            ln[num] = pant.value[num];
        }else{
              signo[0] = pant.value[num];
              break;
        }
        
    }

    a = ln[0]
    for(i = 1; i< ln.length;i++){
          a += ln[i] ;
    }
   
     ind_Sig = pant.value.indexOf(signo[0]);
     b = '';
    for(i= ind_Sig+1 ; i< pant.value.length;i++){
        b += pant.value[i];
    }

    switch(signo[0]){
        
        case '+' :  pant.value = parseFloat(a) + parseFloat(b);
        break;

        case '-' :  pant.value = parseFloat(a) - parseFloat(b) ;
        break;

        case '*' :  pant.value = parseFloat(a) * parseFloat(b);
        break

        case '/' :  pant.value = parseFloat(a) / parseFloat(b) ;
        break;

        default:  0
        break
    }

   
}



/*function operar(){
    a = parseFloat(n[0]);
    op = n[1];
    b = parseFloat(n[2]);

    switch(op){
        
        case '+' :  pant.value = a + b;
        break;

        case '-' :  pant.value = a - b ;
        break;

        case '*' :  pant.value = a * b
        break

        case '/' :  pant.value = a / b ;
        break;

        default:  0
        break
    }

}
*/

/*
a = parseFloat(n[0]);
b = parseFloat(n[2]);
*/

b[14].addEventListener('click',()=>{operar()});
b[15].addEventListener('click',()=>{
    pant.value = ''; 
});