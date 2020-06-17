

const axios=require('axios');

const getLugarLatLng=async(direccion)=>
{
    let encodedUrl=encodeURI(direccion);
    let resp=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyC1hVnZKOsmmXG-TzhP8n6ji_nSrUfltAs`)
    if(resp.data.status==='ZERO_RESULTS')
    {
        throw new Error(`No se encontraron datos para la ubicación ${direccion}`);
    }
    let locat=resp.data.results[0];
    let coor=locat.geometry.location;
    return{
        direccion: locat.formatted_address,
        latitud: coor.lat,
        longitud: coor.lng
    }
}
const getWeather=async(lat,lng)=>
{
   
    let resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b6284a6116658f07d00a927babb165b7`);
    if(resp===undefined)
    {
        throw new Error('Datos de latitud y longitud incorrectos');
    }
    return resp.data.main.temp;
}
module.exports=
{
    getLugarLatLng,
    getWeather
}