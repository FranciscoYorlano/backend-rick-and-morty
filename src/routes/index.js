const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getChatDetail = require("../controllers/getChatDetail");

const router = Router();

router.get("/search/:id", getCharById);

router.get("/detail/:id", getChatDetail);

module.exports = router;
