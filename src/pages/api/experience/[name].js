import axios from 'axios';
export default function handler(req, res) {


    let url = "https://pokeapi.co/api/v2/pokemon-species/"
    const name = String(req.query.name); 
    const level = String(req.query.level);

    const response = axios.get(url + name)
        .then(function (response){

            let growth_rate = response.data.growth_rate.name
            let n = level
            let experience; 
            if (growth_rate == "erratic") {
                if (n < 50) {
                    experience = n^3 * (100 - n) / 50
                } else if (50 <= n && n < 68) {
                    experience = n^3 * (150 - n) / 100
                } else if (68 <= n && n < 98) {
                    experience = n^3 * ((1911 - 10 * n) / 3) / 500
                } else {
                    experience = n^3 * (160 - n) / 100
                }
            } else if (growth_rate == "fast") {
                experience = 4 * n^3 / 5
            } else if (growth_rate == "medium-fast") {
                experience = n^3
            } else if (growth_rate == "medium-slow") {
                experience = (6/5) * n^3 - 15 * n^2 + 100 * n - 140
            } else if (growth_rate == "slow") {
                experience = 5 * n^3 /4
            } else {
                if (n < 15) {
                    experience = n^3 * ((n + 1) / 3 + 24) / 50
                } else if (15 <= n && n < 36) {
                    experience = n^3 * (n + 14) / 50
                } else {
                    experience = n^3 * ((n /2) + 32) / 50
                }
            
            }

            url = "https://pokeapi.co/api/v2/pokemon/"
            const response2 = axios.get(url + name)
            .then(function (response2){
                return res.send({experience: experience});

            })
            .catch(function (error){
                console.log(error);
            })


            

        })
        .catch(function (error){
            console.log(error);
        })

    }