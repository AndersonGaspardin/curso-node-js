//import axios from "axios"
const axios = require('axios')

const URL = `https://swapi.dev/api/people`

async function getPeople(peopleId) {
    const url = `${URL}/${peopleId}`
    const response = await axios.get(url)
    return response.data
}
/*
getPeople(4)
.then(function (result){
    console.log('result', result);
})
.catch(function(error){
    console.error('error', error);

})**/

module.exports = {
    getPeople
}