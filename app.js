
const argv=require('./Config/yargs.js').argv;
const lugar=require('./Lugar/lugar.js');
lugar.getLugarLatLng(argv.direccion)
    .then(resp=>
        {
            lugar.getWeather(resp.latitud,resp.longitud)
            .then(r=>
                {
                    console.log('Temperatura: ',r);
                })
            .catch(err=>
                {
                    console.log(err);
                })    
            console.log('Dirección:  ',resp.direccion);
            console.log('Latitud:  ',resp.latitud);
            console.log('Longitud:  ',resp.longitud);
        })
    .catch(err=>
        {
            console.log(err);
        })


        
