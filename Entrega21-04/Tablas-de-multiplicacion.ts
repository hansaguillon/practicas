import * as rls from "readline-sync";

let num : number = rls.questionInt("Ingrese el numero que quiere multiplicar: ");
let cant : number = rls.questionInt("Ingrese la cantidad de veces que lo quiere multiplicar: ");

for(let i:number = 1; i <= cant ; i++ )
{
    console.log(num + " * "+ i + " = "+ num*cant );
}