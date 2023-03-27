import * as rls from "readline-sync";

let sueldo:number = -1;

while(sueldo < 0)
{

    sueldo = rls.questionInt("Ingrese el monto de su sueldo: ");
    if(sueldo > 0)
    {
        if(sueldo < 15001){
            console.log("Su aumento de sueldo es de 20%, va a pasar a cobrar :", sueldo*1.2);
        }
        else
        {
            if((sueldo >= 15001) && (sueldo < 20001))
            {
                console.log("Su aumento de sueldo es de 10%, va a pasar a cobrar :", sueldo*1.1);
            }
            else
            {
                if((sueldo >= 20001) && (sueldo < 25001))
                {
                    console.log("Su aumento de sueldo es de 5%, va a pasar a cobrar :", sueldo*1.05);
                }
                else
                {
                    console.log("Usted cobra mucho no posee nada de aumento");
                }
            }
        }
    }
    else
    {
        console.log("El sueldo no puede ser negativo, vuelva a intentarlo");
    }
    
    
    
    
    
    
}
