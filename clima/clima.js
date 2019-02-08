
const axios = require('axios');
const getClima = async(lat, lng) => {

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f1c51e77bbbdf5796baef990f767ebc5`)
    console.log(resp[0].main.temp);
    return resp.data.main.temp;
}

module.exports = {
  getClima
}
