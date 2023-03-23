const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
    axios
        .get(`${URL}/${id}`)
        .then((response) => {
            const { id, name, image, gender, species } = response.data;

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(
                JSON.stringify({ id, name, image, gender, species })
            );
        })
        .catch((error) => {
            console.log(error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end(error.message);
        });
};

module.exports = getCharById;
