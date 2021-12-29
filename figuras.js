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

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularArearCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};
function calcularPerimetroTriangulo(){
    const input = document.getElementById("Lado1");
    const uno = input.value;
    const value = parseInt(uno);
    const input2 = document.getElementById("Lado2");
    const dos = input2.value;
    const value2 = parseInt(dos);
    const input3 = document.getElementById("Base");
    const tres = input3.value;
    const value3 = parseInt(tres);
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
};
function calcularAreaTriangulo(){
    const input = document.getElementById("Lado1");
    const value = input.value;
    const alturaT = parseInt(value);
    const input2 = document.getElementById("Lado2");
    const value2 = input2.value;
    const baseT = parseInt(value2);
    const area = areaTriangulo(alturaT, baseT);
    alert(area);
};

function AlturaIsoseles(lados, base){
    const a = lados * lados;
    const b = (base * base) / 4;
    const h = a - b;
    return Math.sqrt(h);
};

function calcularAlturaIsoseles(){ 
    const izquierdo = document.getElementById("lado1");
    const derecho = document.getElementById("lado2");
    const base = document.getElementById("base");
    const lado1 = izquierdo.value;
    const lado2 = derecho.value;
    const lado3 = base.value;
    if (lado1 === lado2){
        const altura = AlturaIsoseles(lado1, lado3);
        alert(altura);
    } else {
        alert("los lados no son iguales");
    }
};