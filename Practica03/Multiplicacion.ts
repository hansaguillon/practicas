import * as rls from "readline-sync";

let num1 : number = rls.questionInt("Ingrese un numero para ser multiplicado: ");
let num2 : number = rls.questionInt("Ingrese la cantidad de veces que quiere que se multiplique dicho numero: ");

for(let i: number = 1; i <= num2 ; i++)
{
    console.log(num1, " X ",i, " = ", num1*i,);
}