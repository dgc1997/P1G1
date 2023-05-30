// SECCIÓN DE CÓDIGO PARA LA CALCULADORA
// Dar un nuevo valor al INPUT "resultado" en la pag HTML.
function darValor(valor) {
    document.getElementById("resultado").value = valor;
}

// Obtener el valor actual del INPUT "resultado" en la pag HTML.
function obtenerValor() {
    var numero = document.getElementById("resultado").value;
    return numero;
}

// Adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag HTML
function adjuntarValor(numero) {
    var actualNumero = obtenerValor();
    var juntarNumero = actualNumero + "" + numero;
    darValor(juntarNumero);
}

function calcularFactorial(N) {
    var i = 1;
    var resp = 1;

    if (N >= 0) {
        if (N == 0) {
            return resp;
        } else {
            while (i <= N) {
                resp *= i;
                i += 1;
            }
            return resp;
        }
    } else {
        alert("No existe el factorial de un negativo.");
        return(N);
    }
}

function atras() {
    darValor(A);
}

function convBIN() {
    dec = obtenerValor();
    var bin = ""
    while (dec > 0) {
        bin = (dec % 2) + bin;
        dec = parseInt(dec / 2);
    }
    darValor(bin);
}

function factorial() {
    var actualValor = obtenerValor();
    darValor(calcularFactorial(actualValor));
}

function potencia() {
    A = obtenerValor();
    darValor("");
    operacion = "potencia";
}

function borrar() {
    darValor("");
}

function dividir() {
    A = obtenerValor();
    darValor("");
    operacion = "dividir";
}

function multiplicar() {
    A = obtenerValor();
    darValor("");
    operacion = "multiplicar";
}

function restar() {
    A = obtenerValor();
    darValor("");
    operacion = "restar";
}

function sumar() {
    A = parseInt(obtenerValor());
    darValor("");
    operacion = "sumar";
}

function igual() {
    var B = parseInt(obtenerValor());
    if (operacion == "potencia") {
        var res = NpotenciaDePconParams(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "dividir") {
        var res = dividirAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "multiplicar") {
        var res = multiplicarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "restar") {
        var res = restarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "sumar") {
        var res = sumarAyB(A, B);
        darValor(res);
        operacion = "";
    }
    if (operacion == "MOD") {
        var res = ModAyB(A, B);
        darValor(res);
        operacion = "";
    }
}

function MOD() {
    A = obtenerValor();
    darValor("");
    operacion = "MOD";
}

function inverso() {
    var actualValor = obtenerValor();
    darValor(actualValor*(-1));
}

function numero(dig) {
    adjuntarValor(dig);
}

function NpotenciaDeP() {
    var N = parseInt(prompt("Ingrese N:", 3));
    var P = parseInt(prompt("Ingrese P:", 4));
    var i = 1, res = 1

    while (i <= P) {
        res = res * N
        i = i + 1
    }

    alert(res)
}

function NpotenciaDePconParams(N, P) {
    var i = 1, res = 1
    while (i <= P) {
        res = res * N
        i = i + 1
    }
    return res;
}

function dividirAyB(A, B){
    return A / B;
}

function multiplicarAyB(A, B){
    return A * B;
}

function restarAyB(A, B){
    return A - B;
}

function sumarAyB(A, B){
    return A + B;
}

function ModAyB(A, B){
    return A % B;
}
