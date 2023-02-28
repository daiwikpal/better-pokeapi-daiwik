import axios from 'axios';
export default function handler(req, res) {

    const randomNum = Math.floor(Math.random() * 1008); 
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const response = axios.get(url + randomNum)
        .then(function (response){
            let types_list = response.data.types.map(type => type.type.name)
            return res.send({name: response.data.name, sprite: response.data.sprites.front_default, types: types_list}); 
        })
        .catch(function (error){
            console.log(error);
        })
        
  



    // // fetch the pokemon list
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    //     .then(response => response.json())
    //     .then(data => {
    //         // get a random number between 0 and 1000
    //         let random = Math.floor(Math.random() * 1000)
    //         // get the name of the pokemon at that index
    //         let name = data.results[random].name
    //         // return the name
    //         return res.send(name)
    //     })

}