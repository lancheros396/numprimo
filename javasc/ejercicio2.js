/*utilizando un bucle mostrar la suma y media d elos numeros introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado*/ 

var suma = 0;
var contador = 0;

do{
    var numero= parseInt(prompt ("introuce numero hasta que metas uno negativo",0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma= suma + numero;

        contador++; 
    }
    console.log(suma);
    console.log(contador);
}while(numero >=0)
    alert("la suma de todos los numeros es "+ suma);
    alert("la medio de del valor de la suma es de: "+ (suma/contador));     