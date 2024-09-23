//objrto que incluye metodos para realizar acciones
const coche = {
    marca: "toyota",
    modelo: "Nissan GtR 35",
    encender: function(){
        console.log("el coche esta encendido");
    },
    apagar: function(){
        console.log("el coche esta apagado");
    }
};

//uso de los metodos del objeto
coche.encender();
coche.apagar();