//Variables con valore de la lista
const salariosCol = colombia.map(({salary}) => salary)

const salariosColSorted = salariosCol.sort((a, b) => a - b);

// Funciones para LLamar "helpers" ---------------------------------
function esPar(numerito) {
    return (numerito % 2 === 0);
}

//Proceso ---------------------------------
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2); //super necesario

    if (esPar(lista.length)) { //cuales son los indices del medio en el arreglo
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]); //la funcion solo acepta una arreglo []
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General ---------------------------------

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((a = 0, b) => a + b);
        const promedioLista = sumaLista / lista.length; 
        return promedioLista; 
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana Top 10% ---------------------------------

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount
    )

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
})