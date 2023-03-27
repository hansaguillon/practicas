import * as rls from "readline-sync";

let par :number = rls.questionInt("Ingrese un numero: ");
let resul : number = par % 2;

if(par != 0){
    if (resul == 0)
    {
        console.log("El numero ", par, " es Par");
    }
    else{
        console.log("El numero ", par, "Es Impar"  );
    }
}else
{
    console.log("El numero es 0");
}

