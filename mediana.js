let mediana;

function Conversor(){
    const NumeroSinOrdenar = document.getElementById("Numeros").value.replace(/ /g, "").split(','); //Split() es para crear un array con el separador de , 
    const Numero = NumeroSinOrdenar.sort(); //Esto es para ordenar el Array
    const resultado = document.getElementById("Resultado"); //Para poner un parrafo con el resultado
    const mitadNumeros = parseInt(Numero.length / 2);//Saber donde es la mitad

    if (esPar(Numero.length)) {
        const elemento1 = parseInt(Numero[mitadNumeros - 1]); //la posicion uno del medio y un parseInt para que sea un numero entero
        const elemento2 = parseInt(Numero[mitadNumeros]);     //la posicion dos del medio

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]); //ver la media de los elementos pares

        resultado.innerHTML = promedioElemento1y2;

    } else {
    mediana = Numero[mitadNumeros];
    resultado.innerHTML = mediana;
    }
};

//______Para saber si es par

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


//______Media Aritmetica

function calcularMediaAritmetica(lista){
    const sumarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumarLista / lista.length;
    return promedioLista;
};