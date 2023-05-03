import * as rls from "readline-sync";

function validarNota(nota: number): boolean{

    let resul: boolean = false;

    if((nota > 0) && (nota <= 10))
    {
        console.log("Holi");
        resul = true;
    }
    return resul;
}
function promedio(nota1:number,nota2:number,nota3:number): number
{
    let total:number = (nota1+nota2+nota3)/3

    return total;
}

function validarSalida(letra: string):boolean
{
    let salir : boolean = false
    letra = letra.toLowerCase();
    if(letra == 'n')
    {
        salir = true;
    }
    return salir;
}

let nota : number [][] = [];
let nombre :string [] = [];
let salir: string = "";
let not1 : number, not2 : number, not3:number;

do
{
    nombre.push (rls.question("Ingrese el nombre del alumno "));
    do
    {
        not1 = rls.questionInt("Ingrese el numero de la primer nota: ");
    }while(!validarNota(not1))
    do
    {
        not2 = rls.questionInt("Ingrese el numero de la Segunda nota: ");
    }while(!validarNota(not2))
    do
    {
        not3 = rls.questionInt("Ingrese el numero de la Tercer nota: ");
    }while(!validarNota(not3))
    nota.push([not1,not2,not3]);

    salir = rls.question("Ingrese n para mostrar todos los datos cargados: ");
}while(!validarSalida(salir))

for(let i:number = 0; i< nombre.length; i++)
{
    console.log("Las notas del alumno "+ nombre[i]+ " son " + nota[i][0]+ " , "+ nota[i][1] + " , "+ nota[i][2]);
    console.log("El promedio del alumno es: "+ promedio(nota[i][0],nota[i][1],nota[i][2]));
}