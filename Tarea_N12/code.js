function invertirCadena() {
  var cadena = prompt("Ingrese una Cadena: ",)
  var longCad = cadena.length;
  var i = 0;
  var cadInvertida = "";

  while (i < longCad) {
      var caracter = cadena[i];
      cadInvertida = caracter + cadInvertida;
      i++;
  }

  alert(cadInvertida)
}

function eliminarPrimeryUltimoCar(){
var cadena = prompt("Ingrese una Cadena: ",)
var nuevaCadena = cadena.substring(1, cadena.length - 1)
alert(nuevaCadena)
}







