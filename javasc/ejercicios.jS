

//PROGRAMA QUE PIDA DOS NUMEROS Y SABER CUAL ES EL MAYOR , EL MENOR , SI SON IGUALES. 


/*var num1 = parseInt(prompt("diga numero 1", 0));

var num2 = parseInt(prompt("diga nunmero 2",0)) ;

if(num1>num2){
    console.log("el numero mayor es "+num1);
    console.log("el numero nemor es: "+num2);
}else if(num1 == num2){
    console.log("son iguales ");
}else{
    console.log("introdice numeros correctos")
}*/

//si los numeros  no son numeros o son un string o cero que nos vuelva a pedir los numeros. 
var num1 = parseInt(prompt("diga numero 1", 0));

var num2 = parseInt(prompt("diga nunmero 2",0)) ;

while(num1<0 || num2<0 || isNaN(num1) || isNaN(num2)){
     num1 = parseInt(prompt("diga numero 1", 0));
     num2 = parseInt(prompt("diga nunmero 2",0));
}

if(num1>num2){
    console.log("el numero mayor es "+num1);
    console.log("el numero nemor es: "+num2);
}else if(num1 == num2){
    console.log("son iguales ");
}
