// Datos de las cuentas
const cuentas = [
  { nombre: "Lala", saldo: 320, password: "1222" },
  { nombre: "Angelo", saldo: 410, password: "contraseña" },
  { nombre: "Sara", saldo: 98, password: "chocolate" }
];

// Función para verificar el password y acceder a las opciones
function verificarPassword() {
  const cuentaSeleccionada = document.getElementById("cuenta").value;
  const passwordIngresado = document.getElementById("password").value;
  
  if (cuentas[cuentaSeleccionada].password === passwordIngresado) {
      document.getElementById("opciones").style.display = "block";
      document.getElementById("resultado").innerHTML = "Acceso concedido. Elige una opción.";
  } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
      document.getElementById("password").value = "";
      ocultarSecciones();
      limpiarResultado();
  }
}

// Función para consultar el saldo
function consultarSaldo() {
  ocultarSecciones();
  limpiarResultado();
  const cuentaSeleccionada = document.getElementById("cuenta").value;
  const saldo = cuentas[cuentaSeleccionada].saldo;
  document.getElementById("resultado").innerHTML = `Tu saldo actual es: $${saldo}`;
  setTimeout(reiniciarPagina, 20000);
}

// Función para mostrar opciones de ingresar monto
function mostrarOpcionesIngresar() {
  ocultarSecciones();
  limpiarResultado();
  document.getElementById("opcionesIngresar").style.display = "block";
}

// Función para mostrar opciones de retirar monto
function mostrarOpcionesRetirar() {
  ocultarSecciones();
  limpiarResultado();
  document.getElementById("opcionesRetirar").style.display = "block";
}

// Función para ingresar un monto
function ingresarMonto(monto = null) {
  ocultarSecciones();
  limpiarResultado();
  const cuentaSeleccionada = document.getElementById("cuenta").value;
  if (monto === null) {
      monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
  }

  if (isNaN(monto) || monto <= 0) {
      alert("Monto no válido.");
      return;
  }

  let nuevoSaldo = cuentas[cuentaSeleccionada].saldo + monto;

  if (nuevoSaldo > 990) {
      alert("No puedes tener más de $990 en tu cuenta.");
  } else {
      cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
      document.getElementById("resultado").innerHTML = `Has ingresado $${monto}. Nuevo saldo: $${nuevoSaldo}`;
      setTimeout(reiniciarPagina, 20000);
  }
}

// Función para retirar un monto
function retirarMonto(monto = null) {
  ocultarSecciones();
  limpiarResultado();
  const cuentaSeleccionada = document.getElementById("cuenta").value;
  if (monto === null) {
      monto = parseFloat(prompt("Ingresa el monto a retirar:"));
  }

  if (isNaN(monto) || monto <= 0) {
      alert("Monto no válido.");
      return;
  }

  let nuevoSaldo = cuentas[cuentaSeleccionada].saldo - monto;

  if (nuevoSaldo < 10) {
      alert("No puedes retirar más de lo que tienes en tu cuenta. El saldo mínimo es $10.");
  } else {
      cuentas[cuentaSeleccionada].saldo = nuevoSaldo;
      document.getElementById("resultado").innerHTML = `Has retirado $${monto}. Nuevo saldo: $${nuevoSaldo}`;
      setTimeout(reiniciarPagina, 20000);
  }
}

// Función para ocultar las secciones de ingreso y retiro de dinero
function ocultarSecciones() {
  document.getElementById("opcionesIngresar").style.display = "none";
  document.getElementById("opcionesRetirar").style.display = "none";
}

// Función para limpiar el resultado anterior
function limpiarResultado() {
  document.getElementById("resultado").innerHTML = "";
}

// Función para reiniciar la página
function reiniciarPagina() {
  location.reload();
  alert ("Sesión cerrada. Ingrese nuevamente")
}
