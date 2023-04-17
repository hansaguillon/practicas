import * as rls from "readline-sync";

function areaTriangulo(base: number, altura : number): number {
    let area : number = (base*altura) / 2;
    return area;
}

console.log("El area del triangulo con 1,2 es: "+areaTriangulo(1,2));
console.log("El area del triangulo con 2,4 es: "+areaTriangulo(2,4));
console.log("El area del triangulo con 3,6 es: "+areaTriangulo(3,6));
console.log("El area del triangulo con 4,8 es: "+areaTriangulo(4,8));
console.log("El area del triangulo con 5,10 es: "+areaTriangulo(5,10));
console.log("El area del triangulo con 6,12 es: "+areaTriangulo(6,12));
console.log("El area del triangulo con 7,14 es: "+areaTriangulo(7,14));
