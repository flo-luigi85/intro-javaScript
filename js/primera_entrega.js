let savedPIN = '3372';

function login() {
    
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let userPIN = prompt('Ingresá tu PIN. Tenés ' + (i + 1) + ' oportunidades.');

        if (userPIN === savedPIN) {

            alert('Bienvenido/a! \nA Servicios Moviles. ');
            ingresar = true;
            break;

        } else {

            alert('Error. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;

}


if (login()) {
    
    let saldo = 3325;
    let gigas = 0;

    let consulta = prompt('Elija la opcción deseada: \n1- Consulta de saldo \n2 - Mini-recarga \n3 - Pedir-Gbs \nPresioná X para finalizar.');

    while (consulta != 'X' && consulta != 'x') {

        switch (consulta) {

            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;

            case '2':
                let recarga = parseInt(prompt('Ingrese una cifra'));
                if (recarga <= saldo) {
                    saldo -= recarga;
                   
                    alert('Tu pedido se efectuara en las proximas hs. Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;

            case '3':
                let recarGbs = parseInt(prompt('Ingrese la cantidad de GBs'));
                gigas += recarGbs;
                // Es equivalente a la linea anterior
                //saldo = saldo+deposito;
                alert('Gracias por recargar. Tenés: ' + gigas + 'GBs para navegar');
                break;

            default:
                alert('Elegiste una opción inválida');
                break;

        }

        consulta = prompt('Elegí una opción: \n1- Consulta de saldo. \n2 - Mini-recarga. \n3 - Pedir-Gbs. \n Digite X para finalizar.');

    }

} else {
    
    alert('Disculpe, vuelva hacer la consulta mas tarde. \n Hubo varios intentos fallidos,');

}

alert('Adiós');