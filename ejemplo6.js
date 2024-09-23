var factura ={
    numero: 201,
    cliente: "Libreria Mejia",
    divisa: "dolares",
    total: 600,
    Iva: 78
}


var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFactura = factura.total;
console.log(`La factura` + numeroFactura + `es de` + totalFactura + ``+ monedaFactura);

factura.numero = 201,
numeroFactura = factura.numero;
console.log(`la factura` + numeroFactura + `es de `  + totalFactura + ``+ monedaFactura);
