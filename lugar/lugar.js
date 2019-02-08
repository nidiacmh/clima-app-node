const axios = require('axios');

const getLugarLatLng= async(direccion) => {

  let encodeUrl = encodeURI(direccion);

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${encodeUrl}&appid=f1c51e77bbbdf5796baef990f767ebc5`);

//  console.log(resp.data.list[0].coord.lat);
  //console.log(resp.data.count); imprime si hay resultados
  //console.log(resp.data.list[0].name);

      if(resp.data.count === 0){
        throw new Error(`No hay resultados para la ciudad ${ direccion}`);
      }

        let location = resp.data.list[0].name;
        let coors = resp.data.list[0].coord;

        return{
          direccion: location,
          lat: coors.lat,
          lng: coors.lon
        }
}

module.exports = {
  getLugarLatLng
}
