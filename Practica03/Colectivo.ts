import * as rls from "readline-sync";

let colectivo : string = rls.question("el colectivo arribo a la parada?");

while((colectivo == "NO") || colectivo == ("no"))
{
    colectivo = rls.question("el colectivo arribo a la parada?");
}

console.log("Disfruta del viaje");
