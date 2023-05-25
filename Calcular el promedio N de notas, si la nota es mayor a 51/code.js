function promedioNnotasMayora51() {
    var N = parseInt(prompt("Ingrese N:", 3));
    var suma = 0;
    var i = 0;
    
    while (i < N) {
        var nota = parseInt(prompt("Ingrese la nota:"));
        suma = suma + nota;
        i = i + 1;
    }
    
    suma = suma / N;
    if(suma > 51 ){
        alert("Aprobado con: " + suma)
    }else{
        alert("Reprobado con: " + suma)
    }
    //alert(suma);
}