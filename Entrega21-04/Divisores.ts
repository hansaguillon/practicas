import * as rls from "readline-sync";

function esMultiplo(num1 : number,div: number) : boolean
{   
    let resul : boolean;
    if(num1%div === 0)
    {
        resul = true;
    }
    else
    {
        resul= false;
    }
    return resul;
}
function cantidadDeDivisores(num: number) : number{
    let cont : number = 0;
    for(let i:number = 1; i <= num ; i++)
    {
        if(esMultiplo(num,i))
        {
            cont++;
        }
    }
    return cont;
}

let numero: number = rls.questionInt("Ingrese el numero que desea saber la cantidad de dividores: ");
console.log("La cantidad de divisores que tiene es: "+cantidadDeDivisores(numero) );