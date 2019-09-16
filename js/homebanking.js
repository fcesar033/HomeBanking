//Declaración de variables
let nombreUsuario = "Max Power";
let saldoCuenta = 5000;
let limiteExtraccion = 1000;
const servicioAgua = 350;
const servicioTelefono = 425;
const servicioLuz = 210;
const servicioInternet = 570;
const cuentaAmiga1 = "1234567";
const cuentaAmiga2 = "7654321";
const codigoDeSeguridad = "4673";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    let dinero = parseInt(prompt("Cual sera su nuevo limite de extraccion?"));
    let verificacionLimiteExtraccion = dinero % 100;
    if (isNaN(dinero)) {
        alert("Ingrese un valor valido");
    } else if (verificacionLimiteExtraccion == 0) {
        limiteExtraccion = dinero;
        alert("Su nuevo limite de extraccion es $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    } else {
        alert("Ingrese un limite multiple de 100");
    }
}

function extraerDinero() {
    let dinero = parseInt(prompt("Cuanto dinero desea extraer?"));
    let verificacionExtraccion = dinero % 100;
    if (isNaN(dinero)) {
        alert("Ingrese un valor valido");
    } else if (dinero > saldoCuenta) {
        alert("No cuenta con suficiente saldo para retirar el importe deseado.")
    } else if (verificacionExtraccion != 0) {
        alert("Este cajero solo entrega billetes de $100, por favor ingrese un monto acorde");
    } else if (dinero > limiteExtraccion) {
        alert("Ud se ha excedido del limite de extraccion, por favor ingrese un monto igual o menos a $" + limiteExtraccion);
    } else {
        let saldoCuentaAnterior = saldoCuenta;
        saldoCuenta -= dinero;
        alert("Has extraido $" + dinero + "\nSaldo anterior $" + saldoCuentaAnterior + "\nSaldo actual $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function depositarDinero() {

    let dinero = parseInt(prompt("Cuanto dinero desea depositar?"));
    if (isNaN(dinero)) {
        alert("Ingrese un valor valido");
    } else {
        let saldoCuentaAnterior = saldoCuenta;
        saldoCuenta += dinero;
        alert("Has depositado $" + dinero + "\nSaldo anterior $" + saldoCuentaAnterior + "\nSaldo actual $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

function calculoPagoDeServicio(montoAPagar) {
    if (saldoCuenta >= montoAPagar) {
        saldoCuenta -= montoAPagar;
        alert("Ud ha pagado con exito el servicio\nUd pago $" + montoAPagar + "\nSu saldo actual es $" + saldoCuenta);
    } else {
        alert("No cuenta con suficiente dinero para abonar el servicio");
    }
}

function pagarServicio() {
    let servicioAPagar = parseInt(prompt("Ingrese el numero que corresponda con el servicio que desea abonar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Telefono"));
    if (isNaN(servicioAPagar)) {
        alert("Ingrese un valor valido");
    } else {
        switch (servicioAPagar) {
            case 1:
                calculoPagoDeServicio(servicioAgua);
                actualizarSaldoEnPantalla();
                break;
            case 2:
                calculoPagoDeServicio(servicioLuz);
                actualizarSaldoEnPantalla();
                break;
            case 3:
                calculoPagoDeServicio(servicioInternet);
                actualizarSaldoEnPantalla();
                break;
            case 4:
                calculoPagoDeServicio(servicioTelefono);
                actualizarSaldoEnPantalla();
                break;
            default:
                alert("Por favor seleccione correctamente una de las alternativas correspondientes");
                break;
        }
    }
}

function transferirDinero() {
    montoATransferir = parseInt(prompt("Cuanto desea transferir?"));
    if (isNaN(montoATransferir)) {
        alert("Ingrese un valor valido");
    } else if (montoATransferir > saldoCuenta) {
        alert("El monto ingresado supera el saldo en cuenta");
    } else {
        cuentaATransferir = prompt("Ingrese el numero de cuenta amiga a la cual desea transferir el  importe $" + montoATransferir);
        switch (cuentaATransferir) {
            case "1234567":
                saldoCuenta -= montoATransferir;
                alert("Se han transferido $" + montoATransferir + "\nCuenta destino " + cuentaAmiga1);
                actualizarSaldoEnPantalla();
                break;
            case "7654321":
                saldoCuenta -= montoATransferir;
                alert("Se han transferido $" + montoATransferir + "\nCuenta destino " + cuentaAmiga2);
                actualizarSaldoEnPantalla();
                break;
            default:
                alert("Ingrese una cuenta amiga valida");
        }
    }
}

function iniciarSesion() {
    let codigo = prompt("Ingrese su codigo de seguridad para ingresar en la cuenta del Banco");
    if (codigo === codigoDeSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones");
    } else {
        alert("Codigo incorrecto, tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla()
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


