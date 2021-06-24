var payasos = parseInt(prompt('Ingresa el número de payasos'));
var munecas = parseInt(prompt('Ingresa el número de muñecas'));

function main(payasos, munecas){
    // En la variable numPaquetes almacena el valor
    let numPaquetes = (PesoPaquete(payasos,munecas))/1000;
    if((numPaquetes*1000)%1000 != 0){
        numPaquetes = parseInt(numPaquetes) + 1;
    }
    console.log(numPaquetes);
}
// Calcula el peso total del paquete
function PesoPaquete(payasos, munecas){
    let pesoTotal = (payasos * 112) + (munecas * 75);
    return pesoTotal
}

main(payasos,munecas);