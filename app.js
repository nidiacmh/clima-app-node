//yargs nos permite utilizar directamente los argumentos en la raiz  de la aplicacion por eso se usa options

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc:'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

let getInfo = async () =>{

  try{
    let coors = await lugar.getLugarLatLng(argv.direccion);
    console.log(coors);
    let temp = await getClima(coors.lat, coors.lng);


    return `El clima en ${coors.direccion} es de ${ temp} °C`;
  }catch(e){
    return ` No se pudo encontrar un clima en: ${argv.direccion}`;
  }
}
  getInfo( argv.direccion)
      .then(mensaje => console.log(mensaje))
      .catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp =>{
      console.log(resp);
    })
    .catch(e => console.log(e));

clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log('Temperatura: ' + temp + '°C'))
    .catch(e=> console.log(e));*/
//console.log(argv.direccion);
