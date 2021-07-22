
const express = require("express");

const router = express.Router();

const gameControl = require("../controllers/games_controller.js");

 router.route('/games')
        .get(gameControl.gamesGetAll);

        

 module.exports = router;


