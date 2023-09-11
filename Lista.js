// Crear una lista de contactos con datos predefinidos
let listaContactos = [
    { nombreApellido: "Juan Pérez" },
    { nombreApellido: "María García" },
    { nombreApellido: "Luis Rodríguez" }
];

// Función para agregar un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
    listaContactos.push({ nombreApellido });
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
    listaContactos = listaContactos.filter(contacto => contacto.nombreApellido !== nombreApellido);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaContactos.forEach(contacto => {
        console.log(contacto.nombreApellido);
    });
}

// Ejemplos de uso
agregarContacto("Ana López");
agregarContacto("Pedro González");
imprimirContactos();

// Borrar un contacto
borrarContacto("María García");
imprimirContactos();
