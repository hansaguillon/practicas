import * as rls from "readline-sync";

function positivo (num1: number): boolean
{

    if(num1 > 0)
    {
        return true;
    }

    return false;
}
function negativo (num1: number): boolean
{

    if(num1 < 0)
    {
        return true;
    }

    return false;
}
function encontrarCeros (num1: number): boolean
{

    if(num1 == 0)
    {
        return true;
    }

    return false;
}

let cant:number = rls.questionInt("Ingrese la dimension del arreglo: ");
let cont: number = 0;
let arreglo: number[] = new Array (cant);
let pos : number = 0;
let neg : number = 0;
let cero : number = 0;

do
{
    
    arreglo[cont] = rls.questionInt("Ingrese un numero en el arreglo: ");
    cont++;
}while(cant > cont)
cont = 0;
do
{
    if(encontrarCeros(arreglo[cont]))
    {
        cero++;
    }
    else
        if(positivo(arreglo[cont]))
        {
            pos++;
        }
        else
        {
            if(negativo(arreglo[cont]))
            neg++;
        }
    cont++;
}while(cant >= cont)

console.log("La cantidad de positivos es : "+pos);
console.log("La cantidad de Negativos es : "+neg);
console.log("La cantidad de ceros es : "+cero);