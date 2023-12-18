


window.onload = function(){
    display = document.getElementById("display");
}

function fn0(){
    if(document.getElementById("display").innerHTML!=0){
        let prev = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML=prev+0;
    }
    else{
        document.getElementById("display").innerHTML=0;
    }

}

function fn1(){
    let prev = display.innerHTML;
    display.innerHTML=prev+1;
}

function fn2(){
    let prev = display.innerHTML;
    display.innerHTML=prev+2;
}

function fn3(){
    let prev = display.innerHTML;
    display.innerHTML=prev+3;
}

function fn4(){
    let prev = display.innerHTML;
    display.innerHTML=prev+4;
}

function fn5(){
    let prev = display.innerHTML;
    display.innerHTML=prev+5;
}

function fn6(){
    let prev = display.innerHTML;
    display.innerHTML=prev+6;
}

function fn7(){
    let prev = display.innerHTML;
    display.innerHTML=prev+7;
}

function fn8(){
    let prev = display.innerHTML;
    display.innerHTML=prev+8;
}

function fn9(){
    let prev = display.innerHTML;
    display.innerHTML=prev+9;
}

function fndelete(){
    let prev =display.innerHTML;
    let erase = prev.slice(0,-1);
    display.innerHTML=erase;
}

function fnac(){
    display.innerHTML;
    display.innerHTML=null;
}

let firstno;
let oparator;


function fnadd(){
    
    let prev =display.innerHTML;
    
    if(prev.slice(-1)!= "+" ){
     display.innerHTML=prev + "+";
     oparator=1;
    }
    else{
        console.log(prev.slice(-1));

        display.innerHTML=prev;
    }
 
}

function fnsub(){
    let prev = display.innerHTML;
    display.innerHTML=prev + "-";
    oparator=2;
 
}
function fnmultiple(){
    let prev = display.innerHTML;
    display.innerHTML=prev + "*";
    oparator=3;
 
}
function fndivision(){
    let prev = display.innerHTML;
    display.innerHTML=prev + "/";
    oparator=4;
 
}


function sum(){
    let mynumbers ;
    let lastno = document.getElementById("display").innerHTML;
    console.log(lastno);
    switch (oparator){
        case 1:
            mynumbers = lastno.split("+");
            document.getElementById("display").innerHTML=parseInt(mynumbers[0])+parseInt(mynumbers[1]);
            break;
        case 2:
            mynumbers = lastno.split("-");
            document.getElementById("display").innerHTML=parseInt(mynumbers[0])-parseInt(mynumbers[1]);
            break;
         case 3:
            mynumbers = lastno.split("*");
            document.getElementById("display").innerHTML=parseInt(mynumbers[0])*parseInt(mynumbers[1]);
            break;
        case 4:
            mynumbers = lastno.split("/");
            document.getElementById("display").innerHTML=parseInt(mynumbers[0])/parseInt(mynumbers[1]);
            break;
    }
}
