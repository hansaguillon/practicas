import { log } from "console";
import { LOADIPHLPAPI } from "dns";
import * as rls from "readline-sync";

let nombreAlumno : string;
let notaPractica: number ;
let notaProblemas : number;
let notaTeoria : number;
let seguir : string = "S";
let validar : boolean = true;
let calificacion : number ;

do{
    nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
    do
    {
        validar = true;
        notaPractica = rls.questionInt("Nota Practica: ");
        if((notaPractica < 0) || (notaPractica > 10))
            {
                console.log("El valor ingresado de las nota de practica no esta entre los valores  0 y 10 \n Vuelva a intentarlo");
            }
        else
        {
            validar = false;
        }
    }while(validar)

    do
    {
        validar = true;
        notaProblemas = rls.questionInt("Nota Probelmas: ");
        if(notaProblemas < 0 || notaProblemas > 10)
            {
                console.log("El valor ingresado de las nota de problemas no esta entre los valores  0 y 10 \n Vuelva a intentarlo");
            }
            else
            {
                validar = false;
            }
    }while(validar)
    do
    {
        validar = true;
        notaTeoria = rls.questionInt("Nota Teoria: ");
        if(notaTeoria < 0 || notaTeoria > 10)
            {
                console.log("El valor ingresado de las nota de teoria no esta entre los valores  0 y 10 \n Vuelva a intentarlo");
            }
            else
            {
                validar = false;
            }
    }while(validar)
    calificacion = (notaPractica*0.1)+ (notaProblemas*0.4)+(notaTeoria*0.5);
    console.log("La nota del alumno "+ nombreAlumno+" es: "+calificacion);
    seguir = rls.question("Quiere cargar otro alumno? precione s \n Para finalizar precione n ");
    

}while (seguir != "n")

console.log("BYEEEEEE");