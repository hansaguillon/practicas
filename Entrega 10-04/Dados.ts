import { log } from "console";
import * as rls from "readline-sync";
import { resourceLimits } from "worker_threads";

let cant : number = 0;
let seguir : boolean = true;
let pregunta : string = "";
let resul : number;
do
{   

    cant = rls.questionInt("Ingrese la cantidad de dados ");
    resul =6**cant ;
    resul = 1/resul;
    console.log("La probabilidad de sacar 6 con "+ cant+" de dados es: " + resul);
    pregunta = rls.question("Ingrese letra n para finalizar el programa ");
    if(pregunta == "n")
    {
        seguir = false;
    }
}while(seguir)