function descontar(precio,porcentaje){
    let descuento = (porcentaje/100)
    return  precio * descuento;
}

module.exports = descontar