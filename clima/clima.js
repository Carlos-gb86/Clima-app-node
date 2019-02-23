const axios = require('axios');

//  d02ec21d5d6e60d88ecf7689ee82c444

const url = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'f369635965b00ad16ced5da4da4b9f3b';

const getClima = async(lat,lng) => {
   
    let request = `${url}lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;                  

    let resp = await axios.get(request);
        
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
