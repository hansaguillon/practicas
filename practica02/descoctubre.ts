import * as rls from "readline-sync";

let mes : string = rls.question("Ingrese el mes de cobranza ");
let cantidad : number = rls.questionInt("Ingrese la cantidad del prodcuto ");
let precio : number = rls.questionInt("Ingrese el precio del producto ");
let total : number = cantidad *precio;
let descuento : number = 0;

if ((mes == "Octubre") || (mes == "octubre"))
{
    descuento = total *0.15;
    console.log("El descuento por abonar en octubre es de: ",descuento);
}
else
{
    console.log("Usted no tiene descuento, Vuelva pronto");
}