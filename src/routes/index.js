const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getChatDetail = require("../controllers/getChatDetail");

const router = Router();

router.get("/search/:id", (req, res) => {
    getCharById(res, req.params.id);
});

router.get("/detail/:id", (req, res) => {
    getChatDetail(re, req.params.id);
});

module.exports = router;
