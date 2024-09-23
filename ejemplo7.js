var factura = {
    numero:650,
    clientes: `transportes Mejia`,
    vencimiento: {
        1: new  Date(2023,10,20),
        2: new  Date (2023,9,30),
        3: new  Date (2023,12,1)
        
        
        

        }
}


var numeroFactura = factura.numero;
var importeTercerVencimiento = factura.vencimientos[1].importe;
console.log(`El segundo vencimiento de la Factura` + numeroFactura+ `sere el`+ primerVencimiento.getDate());