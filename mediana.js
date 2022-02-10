
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );
        const promedioLista = sumaLista / lista.length; 
        return promedioLista; 
}
       
function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function Conversor(numeros) {
    const listaOrdenada = numeros.sort((a, b) => a - b);
    const mitadLista = parseInt(numeros.length / 2);

    let mediana;

    if (esPar(numeros.length)) {
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana = promedioElemento1y2;
    } else {
        return mediana = listaOrdenada[mitadLista];
    }
}