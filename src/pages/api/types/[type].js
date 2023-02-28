import axios from 'axios';
export default function handler(req, res) {

    // takes in the type of pokemon

    // uses axios to get the link 


    const url = "https://pokeapi.co/api/v2/type/"
    const type = String(req.query.type); 

    const response = axios.get(url + type)
        .then(function (response){
            let pokemon = response.data.pokemon.map(poke => poke.pokemon.name)
            return res.send({pokemon}); 

        })
        .catch(function (error){
            console.log(error);
        })
}