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

let dividendo : number = rls.questionInt("Ingrese el dividendo: ");
let divisor : number = rls.questionInt("Ingrese el divisor: ");
if(esMultiplo(dividendo,divisor))
{
    console.log("Los numeros son multiplos");
}
else{
    console.log("Los numeros no son multiplos");
}