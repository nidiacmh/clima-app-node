const axios = require('axios');

const getLugarLatLng= async(direccion) => {

  let encodeUrl = encodeURI(direccion);

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${encodeUrl}&appid=f1c51e77bbbdf5796baef990f767ebc5`)

      if(resp.data.status === "ZERO_RESULTS"){
        throw new Error(`No hay resultados para la ciudad ${ direccion}`);
      }

        let location = resp.data.results[0];
        let coors = location.geometry.location;

        return{
          direccion: location.formatted_address,
          lag: coors.lat,
          lng: coors.lng
        }
}

module.exports = {
  getLugarLatLng
}
