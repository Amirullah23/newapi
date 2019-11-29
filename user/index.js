const router = require("express").Router()

// router.get("/", (req, res) => {
//     res.status(200).send({pesan : "this from user to my phone add one again"})
// } )

router.get("/", require("./controller").getAll)
router.post("/", require("./controller").update)


module.exports = router