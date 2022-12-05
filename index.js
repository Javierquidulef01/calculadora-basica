let btnNumeros = document.querySelectorAll(".btnNro")
let btnOperadores = document.querySelectorAll(".btnOperador");
let btnResultado = document.getElementById("btnResultado");
let btnBorrar = document.getElementById("btnBorrar");

let nro1 = null;
let nroAux= "";
let operador = "";
let pantallaAux = "";
let resultado = 0;


function salida(cadena) {
    console.log(cadena);
    pantallaAux += cadena;
    console.log(pantallaAux);
    document.querySelector(".pantalla").innerHTML = pantallaAux;
}


for (let i = 0; i < btnNumeros.length; i++) {
    btnNumeros[i].addEventListener("click", (e)=> {
        nroAux += e.target.innerHTML;
        salida(e.target.innerHTML);
    });
}


for (let i = 0; i < btnOperadores.length; i++) {
    btnOperadores[i].addEventListener("click", (e) => {
        if (nro1 == null) {
            nro1 = Number(nroAux);
        }
        if (nroAux != "" && operador != "") {
            generarResultado();
        }
        nroAux = "";
        operador = String(e.target.innerHTML);
        salida(operador);
    });
}


btnBorrar.addEventListener("click", () => {
    document.querySelector(".pantalla").innerHTML = "";
    nro1 = null;
    nroAux ="";
    operador = "";
    pantallaAux = "";
    resultado = 0;
});


btnResultado.addEventListener("click", generarResultado);
function generarResultado() {
    realizarOperacion(nro1, nroAux, operador);
    pantallaAux = resultado;
    nro1 = resultado;
    operador = "";
}



function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    }
    return "No se puede dividir por cero";
}

function mostrarResultado(num1, num2, callback) {
    if (String(num1) == 'NaN' || num2 == "") {
        resultado = "Error de sintaxis";
    } else {
        resultado = callback(num1, Number(num2));
    }
    document.querySelector(".pantalla").innerHTML = resultado;
}

function realizarOperacion(num1, num2, operador) {
    switch (operador) {
        case "+":
            mostrarResultado(num1, num2, sumar);
            break;

        case "-":
            mostrarResultado(num1, num2, restar);
            break;

        case "x":
            mostrarResultado(num1, num2, multiplicar);
            break;

        case "/":
            mostrarResultado(num1, num2, dividir);
            break;
    }
}