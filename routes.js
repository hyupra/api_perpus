const router = require("express").Router();

router.use(`/pengarang`, require("./routes/pengarang_routes"));

module.exports = router;