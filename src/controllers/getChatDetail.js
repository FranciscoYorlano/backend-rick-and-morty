const axios = require("axios");
const { URL } = process.env;

const getCharDetail = (res, id) => {
    axios
        .get(`${URL}/${id}`)
        .then((response) => {
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(response.data));
        })
        .catch((error) => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end(error.message);
        });
};

module.exports = getCharDetail;
