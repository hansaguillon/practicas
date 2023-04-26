import * as rls from "readline-sync";

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
    if(arreglo[cont] == 0)
    {
        cero++;
    }
    else
        if(arreglo[cont]> 0 )
        {
            pos++;
        }
        else
        {
            if(arreglo[cont] < 0)
            neg++;
        }
    cont++;
}while(cant >= cont)

console.log("La cantidad de positivos es : "+pos);
console.log("La cantidad de Negativos es : "+neg);
console.log("La cantidad de ceros es : "+cero);