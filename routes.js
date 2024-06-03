const router = require("express").Router();

router.use(`/pengarang`, require("./routes/pengarang_routes"));
router.use(`/buku`, require("./routes/buku_routes"));

module.exports = router;