//calculadora donde se piden dos nueros y se evaluara 
//la suma, multiplicacion, division, resta

/*var num1=parseInt(prompt("diga numero1 ",0));
var num2 = parseInt(prompt("diga numero2",0));

while(num1<0||num2<0 || isNaN(num1)||isNaN(num2)){
    alert("ponga numeros correctos");
    num1=parseInt(prompt("diga numero1 ",0));
    num2 = parseInt(prompt("diga numero2",0));
}
var resul = "la suma es "+(num1+num2)+"<br>"+
        "la resra es: "+(num1-num2)+"<br>"+
        "la divicion es :"+(num1/num2)+"<br>"+
        "la multi es de : "+(num1*num2);

document.write(resul);*/

var num = parseInt(prompt("digite numero para validar si es un numero primo",0));
var res1, res2;
var res;

/*for(var i=2; i<=num-1;i++){

    res=num/num-1;
    if(res%1==0){
        
        console.log("no es muero primo");
    }else{
        console.log("es numero primo");
    }
}*/
var i=num-1;
var x;
for(i; i>2;i--){


res=num/i;
console.log("es"+res);

x=res%1
//console.log(x);
if(x%1==0){   
    break
}


}
if(x==0){
    console.log("no es primo")
}else{
    console.log("es primo")
}

