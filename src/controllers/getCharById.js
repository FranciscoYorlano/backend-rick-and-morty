const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (response, id) => {
    axios
        .get(`${URL}/${id}`)
        .then((response) => {
            const { id, name, image, gender, species } = response.data;

            response.writeHead(200, { "Content-Type": "application/json" });
            return response.end(
                JSON.stringify({ id, name, image, gender, species })
            );
        })
        .catch((error) => {
            console.log(error);
            response.writeHead(500, { "Content-Type": "text/plain" });
            return response.end(error.message);
        });
};

module.exports = getCharById;
