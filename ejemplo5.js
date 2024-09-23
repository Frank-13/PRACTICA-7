//Iterar propiedades de un objeto
const producto ={
    nombre: "Laptop",
    precio: 800,
    disponible: true
};

//uso del bucle para iterar sobre la spropiedades del objeto
for (let propiedad in producto) {
    console.log(`${producto[propiedad]}`);
}