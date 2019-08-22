
function saludo(){
	document.write("hola omar");
}
//se llama la function
saludo();

// se puede pasar parametros
// 
 function saludo1(nombre){
 	document.write("el nombre es " + nombre + "<br>");
 }

 saludo1("omar")

 // otro ejemplo 
 
 suma = function(a, b){
 	var a=a;
 	var b=b;
 	return a+b;	                           //document.write("la suma es de " + (a + b)); --> no se debe hacer de esta forma porque debe retornar
 	                                    //un valor y para eso se usa return. el document debe ir por fuera de la funcion 
 }

 document.write("la suma es :" + suma(255, 5)); 
 document.write("<br>");
 

 //------otro ejemplo------//
 // hacemos una comparacion en una funcion
 
 var numMax = function(c, d){
 	if(c>d){
 		return c;
 	}
 return d;	
 }

 document.write("el numero maximo es :" + numMax(21, 20));