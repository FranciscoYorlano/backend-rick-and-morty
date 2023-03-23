const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharDetail = (res, id) => {
    console.log("Buscando pensonaje completo ID:" + id);
    axios
        .get(`${URL}/${id}`)
        .then((response) => {
            res.writeHead(200, { "Content-Type": "application/json" });
            console.log(JSON.stringify(response.data));
            return res.end(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error.message);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end(error.message);
        });
};

module.exports = getCharDetail;
