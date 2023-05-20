const userNameElement = document.querySelector('#userName');

const userSaldoElement = document.querySelector ('.modal-saldo')

const formIngresarSaldo = document.querySelector ('#ingresarSaldoForm')

const formRetirarSaldo = document.querySelector ('#retirarSaldoForm')



const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const userSaldo = localStorage.getItem('saldo');
if (userSaldo) {
    userSaldoElement.textContent = "$" + `${userSaldo}`;
}

formIngresarSaldo.addEventListener('submit', event => {
    event.preventDefault(); //Evita que se envie al formulario automáticamente
const userSaldo = localStorage.getItem ('saldo');
console.log(event.target.saldoIngresado.value);
const saldoIngresado = event.target.saldoIngresado.value;
const saldoPorValidar = parseInt(userSaldo)+parseInt(saldoIngresado);

console.log(saldoPorValidar)

if (saldoPorValidar > 990) {
/*showAlert({message: 'No se ha podido realizar la operación. Por favor ingrese un monto menor.'});*/
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No se ha podido realizar la operación. Por favor ingrese un monto menor.',
  })
}
else{
    console.log ("Tu nuevo saldo es:" + saldoPorValidar);
    localStorage.setItem("saldo", saldoPorValidar)
    showAlert({message: 'El monto ingresado fue:' + `${saldoIngresado}
    ` + "El saldo actual es:"+ `${saldoPorValidar}`});

}});

formRetirarSaldo.addEventListener('submit', e => {
    e.preventDefault();//Evita que se envie el formulario automáticamente
const Saldo = localStorage.getItem('saldo');
const saldoEgresado = e.target.saldoEgreso.value;
console.log(e.target.saldoEgreso.value);
const saldoActual = parseInt(Saldo) - parseInt(saldoEgresado);
console.log(saldoEgresado);
console.log(saldoActual);

if (saldoActual < 10) {
    //showAlert({message: "No se ha podido realizar la operación. Saldo insuficiente."})
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se ha podido realizar la operación. Saldo insuficiente.',})
}
else {
    console.log ("Tu saldo es:" + saldoActual);
    localStorage.setItem("saldo", saldoActual)
    showAlert({message: "El monto actual:" + `${saldoActual}
    ` + "El monto retirado fue:" + `${saldoEgresado}`});
}});

function showAlert({ message }) {
    /*alert(message); */
    Swal.fire( message 
      )
}
