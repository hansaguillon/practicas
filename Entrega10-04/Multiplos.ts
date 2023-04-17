import * as rls from "readline-sync";

let resul:string = "";
for (let i:number  = 1;i <= 100 ;i++)
{
    if((i%2 == 0) || (i%3 == 0) && (i <= 99))
    {
        if(i != 100)  
        {
            resul += `${i}, `;
        } 
        else
        {
            resul += `${i}. `;
        }
    }

}
console.log(resul);