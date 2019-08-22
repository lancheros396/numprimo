

var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

for(var i=0; i<=semana.length -1 ;i++){
	document.write(semana[i] +"<br>");
}

//--------- CICLO WHILE------

/*var i=0;

while(i<=10){  //---> se ejecuta mientra esta condicion es verdadera
	document.write(i + "<br>");
i++;// este es el incremental
}*/

/*var diaSemana = semana.length-1;
var i=0;
while(i<=diaSemana){
	document.write(semana[i] + "<br>");
	i++
}*/

var num=100;
for(var x=1; x<=num; x++){
	
	console.log("es el numero"+ x);
	if(x == 50){
		break
}	
}

/*var n = 20;
while(n !=5){
	console.log(n);
	n--; 
	
}
var n =20 ; 
console.log(" "); 
while(n != 40){
	console.log(n);
	n++
}*/

// DO WHILE 

/*var x =10; //declara la variable 

do{
	console.log(x);
	x--;
}while(x > 5)*/


var year= 2019;

do{
	console.log("este es el año"+ year);
	year ++;
	if(year ==2025){
		break
	}

}while(year < 2030)