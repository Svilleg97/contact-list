// Crear una lista de contactos con datos predefinidos
let listaContactos = [
    {
        id: 1,
        nombres: "Juan",
        apellidos: "Pérez",
        telefono: "123-456-7890",
        ubicaciones: [
            {
                ciudad: "Ciudad A",
                direccion: "Calle 123"
            },
            {
                ciudad: "Ciudad B",
                direccion: "Avenida 456"
            }
        ]
    },
    {
        id: 2,
        nombres: "María",
        apellidos: "García",
        telefono: "987-654-3210",
        ubicaciones: [
            {
                ciudad: "Ciudad C",
                direccion: "Avenida X"
            }
        ]
    }
];

// Función para agregar un nuevo contacto a la lista
function agregarContacto(contacto) {
    listaContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista por ID
function borrarContacto(id) {
    listaContactos = listaContactos.filter(contacto => contacto.id !== id);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
    console.log("Lista de Contactos:");
    listaContactos.forEach(contacto => {
        console.log(`ID: ${contacto.id}`);
        console.log(`Nombres: ${contacto.nombres}`);
        console.log(`Apellidos: ${contacto.apellidos}`);
        console.log(`Teléfono: ${contacto.telefono}`);
        console.log("Ubicaciones:");
        contacto.ubicaciones.forEach(ubicacion => {
            console.log(`  Ciudad: ${ubicacion.ciudad}`);
            console.log(`  Dirección: ${ubicacion.direccion}`);
        });
        console.log("--------------------------------");
    });
}

// Ejemplos de uso
const nuevoContacto = {
    id: 3,
    nombres: "Ana",
    apellidos: "López",
    telefono: "555-123-4567",
    ubicaciones: [
        {
            ciudad: "Ciudad D",
            direccion: "Calle 789"
        }
    ]
};
agregarContacto(nuevoContacto);

imprimirContactos();

// Borrar un contacto por ID
borrarContacto(2);
imprimirContactos();
