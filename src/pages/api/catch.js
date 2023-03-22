import axios from 'axios';
export default function handler(req, res) {
    const requestMethod = req.method;
    const body = req.body; 

    switch(requestMethod){
        case 'POST':
            let pokemon1 = body.pokemon1;
            // console.log(pokemon1);
            const N = Math.floor(Math.random() * 225);
            // console.log("N:" + N);
            const BALL = Math.floor(Math.random() * 225);
        //    console.log("ball:" + BALL);
            let HP_MAX = 0; 
           
            const url = "https://pokeapi.co/api/v2/pokemon/" 

            const response = axios.get(url + pokemon1)
                .then(function (response){
                    HP_MAX = response.data.stats[0].base_stat;
                    // console.log("HP_MAX:" + HP_MAX)
                })
                .catch(function (error){
                    console.log(error);
                })
            

            const HP_CURRENT = Math.floor(Math.random() * (HP_MAX + 1));
            
            const F = (HP_MAX * 255 * 4) / (HP_CURRENT * BALL); 
            console.log("F:" + F);

            if ( F >= N){
                return res.send({caught: true}) 
            }else{
                return res.send({caught: false})
            }



    }

}