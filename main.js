//cache
var numberBTN = document.querySelectorAll('[data-num]');
var oprBtn = document.querySelectorAll('[data-opr]');
var delBtn = document.querySelector('[data-del');
var dotBtn = document.querySelector('[data-dot');
var pomBtn = document.querySelector('[data-pom');
var zeroBtn = document.querySelector('[data-zero');
var clrBtn = document.querySelector('[data-all-clr]');
var dispPrv = document.querySelector('[data-prv-disp]');
var dispCur = document.querySelector('[data-cur-disp]');
var equBtn = document.querySelector('[data-equ');
var mem = [];
var opera;
var oprUsed = 0;
var chkDot = 0;
var pomChkNv = 0;
var pomChkPv = 1;
var seeIf = 0;

//function that gets the innerhtml of a button pressed
numberBTN.forEach(button => {
    button.addEventListener('click',function disp(){
        function show(){
            mem.push(button.innerHTML)
            dispCur.innerHTML += button.innerHTML;
        }
        if (oprUsed==1) {
           dispCur.innerHTML = "";
           show();
           oprUsed = 0;
        } else{
            show();
            
        }
        // console.log(mem);
    })
});
//decimal 
dotBtn.addEventListener('click',function () {
    if (chkDot==0) {
        dispCur.innerHTML += dotBtn.innerHTML;
        chkDot = 1;
    } 
})
//Zero button
zeroBtn.addEventListener('click',function disp(){
    if (dispCur.innerHTML !="0"){
        function show(){
            mem.push(zeroBtn.innerHTML)
            dispCur.innerHTML += mem[mem.length-1];
        }
        if (oprUsed==1) {
        dispCur.innerHTML = "";
        show();
        oprUsed = 0;
        } else{
            show();
            
        }
    }
})


//Operands +-/*
oprBtn.forEach(button => {
    button.addEventListener('click',function disp(){
        dispCur.innerHTML !==""? (dispPrv.innerHTML = dispCur.innerHTML + button.innerHTML, 
            dispCur.innerHTML = "",opera = button.innerHTML):console.log()       
    })
    pomChkNv = 0;
    pomChkPv = 1;
    seeIf=0;
});
//The plus or Minus button
function pomBTN() {
    
    var pomVar = dispCur.innerHTML;
    if (seeIf!==1) {
        if (pomChkPv==0 && dispCur.innerHTML!==""){
            pomVar2 = "+" + pomVar.substring(pomVar.length,1);
            console.log(pomVar.split(pomVar[0],1))
            dispCur.innerHTML = pomVar2;
            pomChkNv = 0;
            pomChkPv = 1;
            seeIf = 1;
        } else if (pomChkNv==0 && pomChkPv==1 && dispCur.innerHTML!=="") {
            pomVar2 = "-" + pomVar;
            dispCur.innerHTML = pomVar2;
            pomChkNv = 1;
            pomChkPv = 0;
            seeIf = 1;
             } 
    }
       
 }
pomBtn.addEventListener('click', pomBTN)

//Delete button that delete the most recent number
delBtn.addEventListener('click',del);
function del(){
    // var j = mem.length-1 ;
    // // var k = mem.splice(j,1);
    // mem = mem.slice(0,j);
    // // dispCur.innerHTML += mem;
    
    // dispCur.innerHTML = mem;
    var rs = dispCur.innerHTML;
    rs = rs.slice(0,rs.length-1);
    dispCur.innerHTML = rs;
}
//Clear-all button
clrBtn.addEventListener('click',function (){
    // This clears the display
    dispCur.innerHTML = "";
    dispPrv.innerHTML = "";
    mem=[];
    pomChkNv = 0;
    pomChkPv = 1;
    seeIf=0;
    var mem = [];
    opera;
    oprUsed = 0;
    chkDot = 0;
})

//Equals button
equBtn.addEventListener('click', function(){
    if (curDisp != "" && oprUsed != 1){
        //operation 
        var a = parseFloat(dispPrv.innerHTML);
        var b = parseFloat(dispCur.innerHTML);
        dispPrv.innerHTML = "";
        opera=='+'?dispCur.innerHTML = Math.round(a+b):console.log();
        opera=='-'?dispCur.innerHTML = Math.round(a-b):console.log();
        opera=='x'?dispCur.innerHTML = Math.round(a*b):console.log();
        opera=='/'?dispCur.innerHTML = Math.round(a/b):console.log();
        opera=='%'?dispCur.innerHTML = Math.round(a%b):console.log();
        
        mem = [];
        oprUsed = 1;
        chkDot = 0;
        // pomChkNv = 0;
        // pomChkPv = 1;
        seeIf=0;
    }
})
//fiverr earn button
fivBtn.addEventListener('click',function () {
    var fivData = dispCur.innerHTML;
    var fivA = .2*fivData;
    var fivRes = fivData-fivA;
    dispCur.innerHTML = fivRes;
})
