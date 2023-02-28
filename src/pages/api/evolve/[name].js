// notes:
// 1. use axios to get pokemon-species data
// 2. find the 

import axios from 'axios';
export default function handler(req, res) {


    const url = "https://pokeapi.co/api/v2/pokemon-species/"
    const name = String(req.query.name); 
 

    const response = axios.get(url + name)
        .then(function (response){

            console.log(response.data.evolution_chain.url)        

            const response2 = axios.get(response.data.evolution_chain.url )
            .then(function (response2){
                console.log(response2.data.chain.evolves_to.length == 0) 


                if(response2.data.chain.evolves_to.length > 0){
                    const nextEvolution = response2.data.chain.evolves_to[0].evolves_to[0].species.name;
                    return res.send({evolution: nextEvolution})
                }else{
                    return res.send("no evolution, current evolution: " + name)
                }

                //console.log(response2.data.chain.evolves_to)

               
                

            })
            .catch(function (error){    
                console.log(error);
            })


            //let types = response.data.types.map(type => type.type.name)
            //return res.send([response.data.name, response.data.sprites.front_default, types]);
            //return res.send({pokemonName: response.data.name, sprite: response.data.sprites.front_default, types: types}); 

        })
        .catch(function (error){
            console.log(error);
        })




}