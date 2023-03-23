// server-rick-and-morty\src\controllers\getCharById.js
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
    console.log("Buscando pensonaje ID:" + id);
    axios
        .get(`${URL}/${id}`)
        .then((response) => {
            const obj = {
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                gender: response.data.gender,
                species: response.data.species,
            };
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(obj));
        })
        .catch((error) => {
            console.log(error.message);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end(error.message);
        });
};

module.exports = getCharById;
