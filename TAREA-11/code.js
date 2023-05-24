//Ejercicio 1. 
function numParImpar(){
    var n = parseInt(prompt("Ingrese un numero:", 8));
    
    sum = 0;
    for(i=1;i<=n;i++){
        sum++
        if(i % 2==1){
            alert("los numeros impares son: "+ sum)
        }

    }  
 }
        

//Ejercicio 2.- Desarrollar un diagrama de flujo donde se ingresen dos números y te muestre cual es el número mayor
function NumeroMayor(){
	var numero1 = parseInt(prompt("Ingrese el numero 1",""));
	var numero2 = parseInt(prompt("Ingrese el numero 2",""));

	if(numero1 >= numero2)
	{
	alert("El numero mayor es: " + numero1 );
	}
	else
	{
	alert("El Numero mayor es : " + numero2 );
	}
}
//Ejercicio 3.
function NumeroEntero(){
    var suma = 0;
    var i= 2;
    for(i ; i<= 9 ; i++){
        suma += i;
    }
    alert("La suma de números enteros entre el 1 y el 10 es: " + suma);
}

//Ejercicio 4.
function sumEntero(){
    var suma = 0;
    var i = 8;
      for (i; i<= 14; i++){
        if (i%2 == 0) {
          suma += i
        }
      }
      alert("La suma de todos los números pares entre 7 y 15 es: " + suma);
}

//Ejercicio 5.

function areaVolumenCilindro() {
    var r = parseInt(prompt("Ingrese r:", 10));
    var h = parseInt(prompt("Ingrese h:", 5));

    var Area = 0, Volumen = 0;

    Area =  2* 3.14 *r * (r) + h;               
    Volumen = 3.14* (r*r) *h;

    alert("El area es: " + Area);
    alert("El volumen es: " + Volumen);
}

//Ejercicio 6.
function numMayor(){
    var mayor = 0;  
    var A = parseInt(prompt("Ingrese el primer numero"));
    var B = parseInt(prompt("Ingrese el segundo numero"));
    var C = parseInt(prompt("Ingrese el tercer numero"));
        if(A >= B && A >= C){
            mayor = A;
        }else if(B >= A && B >= C){
            mayor = B;
        }else{
            mayor = C;
        }
        alert("El numero mayor es: " + mayor);
}

//Ejercicio 7.
function numPositivoNegativo(){
    var numero = parseInt(prompt("Ingrese un numero:",));

    if(numero == 0){
        
      alert("El numero es Neutro" );
      
    }else if(numero > 0) {
        
      alert("El numero es Positivo" );
      
    }else{
        
      alert("El numero es Negativo");
    }
}

//Ejercicio 8.
function numFor(){
    for (i=1;i<=15;i+=2) 
   	alert(i)
}

//Ejercicio 9.
function numMenor(){
	var numero1 = parseInt(prompt("Ingrese el numero 1",""));
	var numero2 = parseInt(prompt("Ingrese el numero 2",""));

	if(numero1 <= numero2)
	{
	alert("El numero menor es: " + numero1 );
	}
	else
	{
	alert("El Numero menor es : " + numero2 );
	}
}


