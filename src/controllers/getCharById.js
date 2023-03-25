// server-rick-and-morty\src\controllers\getCharById.js
const axios = require("axios");
const { URL } = process.env;

const getCharById = (res, id) => {
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
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end(error.message);
        });
};

module.exports = getCharById;
