//----------------------------------------------------------------------------------------------------------------------------------------------------

//Actividad JS

//8
const invitados = new Set();

const agregarInvitado = (nombre) => {
    if (invitados.has(nombre)) {
        console.log(`${nombre} ya está en la lista de invitados.`);
    } else {
        invitados.add(nombre);
        console.log(`${nombre} ha sido agregado a la lista.`);
    }
};

const eliminarInvitado = (nombre) => {
    if (invitados.has(nombre)) {
        invitados.delete(nombre);
        console.log(`${nombre} ha sido eliminado de la lista.`);
    } else {
        console.log(`${nombre} no se encuentra en la lista de invitados.`);
    }
};

const mostrarInvitados = () => {
    if (invitados.size > 0) {
        console.log(invitados);
    } else {
        console.log("La lista de invitados está vacía.");
    }
};

agregarInvitado("Ana");
agregarInvitado("Carlos");
agregarInvitado("Ana");
eliminarInvitado("Carlos");
mostrarInvitados();