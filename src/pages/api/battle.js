import axios from 'axios';
export default function handler(req, res) {
    const requestMethod = req.method;
    const body = req.body; 

    switch(requestMethod){
        case 'POST':

            let pokemon1 = body.pokemon1;
            let pokemon2 = body.pokemon2;
            let winner = ""; 

            let p1Stat = 0; 
            let p2Stat = 0; 

            const url = "https://pokeapi.co/api/v2/pokemon/"

            const response1 = axios.get(url + pokemon1)
                .then(function (response1){
                    p1Stat = response1.data.stats[0].base_stat;
                    
                })
                .catch(function (error){
                    console.log(error);
                })
            
            const response2 = axios.get(url + pokemon2)
                .then(function (response2){
                    p2Stat = response2.data.stats[0].base_stat;  
                })
                .catch(function (error){
                    console.log(error);
                })
            console.log(p1Stat);
            if(p1Stat > p2Stat){
                winner = pokemon1;
            }else{
                winner = pokemon2;
            }

            return res.send({winner: winner})
    }

}