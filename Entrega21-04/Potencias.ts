import * as rls from "readline-sync";

function potencia(base : number , exponente : number) : number 
{
    let resul : number = exponente;
    if(exponente != 0)
    {
        for(let i :number = 1 ;i< exponente ;i++)
        { 
                  
            resul *= base;

        }
    }
    else
    {
        resul = 1;
    }
    return resul;
}
let e : number
let b : number = rls.questionInt("Ingrese la base: ");
do
{
    e= rls.questionInt("Ingrese el exponente: ");
}while(e < 0)

console.log(potencia(b,e));

