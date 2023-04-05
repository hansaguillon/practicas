import * as rls from "readline-sync";

let num: number = 0
let maximo : number = 0;
do
{
    num = rls.questionInt("Ingrese un numero: ");
    if(num> maximo){
        maximo = num;
    }
}while(num != 0)

console.log("El numero maximo es: ",maximo);