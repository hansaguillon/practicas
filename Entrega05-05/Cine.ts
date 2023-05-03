
function randomBoolean(): boolean {
    return Math.random() < 0.5;
  }
  

  let butacas :boolean [] =new Array (40);
  let cantidadOcupados: number = 0;

  for(let i: number = 0; i < butacas.length;i++ )
  {
    butacas[i] = randomBoolean();
  }

  butacas.forEach(el =>
  {
    if(el == true)
    {
        cantidadOcupados++;
    }

  });

  console.log("La cantidad de butacas ocupadas en el cine son: "+ cantidadOcupados);

