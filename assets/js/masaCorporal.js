function masa(kilo,estatura){
    let resultado;
    resultado = (kilo/(estatura*estatura));
    console.log(resultado);
}

function serie(n){
    let resultado;
    resultado = n*(n+1)/2;
    console.log(resultado);
}

// Esperamos al evento del objeto

document.forms[0].elements[3].onclick = function(e){
    e.preventDefault();
    // Se obtienen las variables del HTML
    let peso = document.forms[0].elements[0]; // Obtenemos el peso
    let estatura = document.forms[0].elements[1]; // Obtenemos la estatura
    let numero = document.forms[0].elements[2]; // Obtenemos el número
    /* Mandamos llamar a las funciones del botón */
    console.log(typeof(numero.value));
    masa(parseFloat(peso.value), parseFloat(estatura.value));
    serie(parseFloat(numero.value));
}