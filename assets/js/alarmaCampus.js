alert('funciona')
function main(temperatura, humendad, numTabajadores, nivelLiquido){
    verificarParametros(temperatura, humendad, numTabajadores, nivelLiquido);
}

const verificarParametros = (temperatura, humendad, numTabajadores, nivelLiquido) =>{
    if(0.3 < temperatura  || temperatura < 0.9){
        alert('Temperatura no valida');
    }
    if(humendad > 0.5){
        alert('La humedad es superior');
    }
    if(numTabajadores > 1){
        alert('El numero de trabajadores superó a 100');
    }
    if(nivelLiquido > 0.9){
        alert('El nivel de líquido es superior');
    }
}

var form = document.forms[0];
form.elements[0].value;
document.querySelector('.btn').onclick = function(e){
    e.preventDefault();
    main(form.elements[0], form.elements[1], form.elements[2], form.elements[3]);
    clearInterval
}