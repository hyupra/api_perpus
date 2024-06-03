const router = require("express").Router();
const controller = require("../controller/Buku");

router.post('/', controller.create);
router.get('/', controller.find);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;