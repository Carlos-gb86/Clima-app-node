const axios = require('axios');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const token = 'pk.eyJ1IjoiY2FybG9zZ2I4NiIsImEiOiJjanNocjcyemkxenR1NGFtbGwzMW85cWl2In0.Vj_b2ZHF2p6UdLdZuYi7-g';

const getLugarLatLng = async (direccion) => {

    let query = encodeURI( direccion );
    let request = `${url}${query}.json?access_token=${token}`;

    let resp = await axios.get(request);

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para la búsqueda de ${ direccion }`);
    }

    let location = resp.data.features[0];
    let coors = location.geometry.coordinates;
    
    return {
        direccion: location.place_name,
        lat: coors[1],
        lng: coors[0]
    }
}

module.exports = {
    getLugarLatLng
}

