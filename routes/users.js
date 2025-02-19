const router = require("express").Router()
const { createuser, getlockedstages, unlockstages } = require("../controllers/user")
const { protectplayer } = require("../middleware/middleware")

router
    .get("/getlockedstages", protectplayer, getlockedstages)
    .post("/createuser", createuser)
    .post("/unlockstages", protectplayer, unlockstages)

module.exports = router;