import axios from 'axios';
export default function handler(req, res) {


    const url = "https://pokeapi.co/api/v2/pokemon/"
    const name = String(req.query.name); 

    const response = axios.get(url + name)
        .then(function (response){
            let types = response.data.types.map(type => type.type.name)
            //return res.send([response.data.name, response.data.sprites.front_default, types]);
            return res.send({pokemonName: response.data.name, sprite: response.data.sprites.front_default, types: types}); 

        })
        .catch(function (error){
            console.log(error);
        })

}