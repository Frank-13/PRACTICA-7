//objeto que tiene propiedades con otros objrtos
const estudiante = {
    nombre: "frank",
    edad: 20,
    direccion:
    {
        calle: "carretera litoral kilometro", 
        ciudad: "jiquilisco"
    },
    materias: ["Matematicas", "programacion", "fisica"]
};
//acceso de las propiedades anidadas
console.log(estudiante.direccion.ciudad);
console.log(estudiante.materias[1])