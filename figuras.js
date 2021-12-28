//codigo del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo 
//     + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo de Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const piCirculo = Math.PI;
console.log("El PI del circulo es: " + piCirculo + "cm");

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * piCirculo;
}
// const perimetroCirculo = diametroCirculo * piCirculo;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area
function  areaCirculo(radio){
    return (radio * radio) * piCirculo;
}
// const areaCirculo = (radioCirculo * radioCirculo) * piCirculo;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();