import axios from 'axios';
export default function handler(req, res) {

    const randomNum = Math.floor(Math.random() * 1008); 
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const response = axios.get(url + randomNum)
        .then(function (response){
            let types = response.data.types.map(type => type.type)
            return res.json({name: response.data.name, sprite: response.data.sprites.front_default, types: types}); 
        })
        .catch(function (error){
            console.log(error);
        })

}