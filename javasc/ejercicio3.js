// hacer un programa que muestre todos los numeros entre dos 
//numeros introducidos por el usuario

/*var num1 = parseInt(prompt("ingrese numero 1", 0));
var num2 = parseInt(prompt("ngrese numero 2", 0));
var suma =0; */

/*document.write("<h1>los numeros que hay "+ num1 +"a"+ num2 +"son:</h1>" )
while(num1 <= num2-1){
    num1++;
    suma= suma+num1
    console.log("numero: "+num1);
    document.write("numero: "+num1+"<br>");

   
}
console.log("la suma es de "+ suma);
document.write("la suma es de "+ suma+"<br><br>");*/

// visualizr todos los numeros pares  que hay entre los dos 
//numeros ingresados

/*var sumapar=0;
while(num1<num2){
    num1++;
    if(num1%2==0){
        console.log(num1)
        sumapar=sumapar+num1;
    }
    }console.log(sumapar);*/

    var num = parseInt(prompt("ingrese numero",0));
    
    while(isNaN(num)){
        num = parseInt(prompt("ingrese numero",0)); 
    }
    if(num%2 ==0){
        console.log("es numero par:");
    }else{
        console.log("es un numero impar");
    }


