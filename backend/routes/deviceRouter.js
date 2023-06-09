const Router = require('express')
const router = new Router();
const deviceController = require('../controllers/deviceController.js')

router.post('/', deviceController.create)
router.get('/:id', deviceController.getOne)
router.get('/', deviceController.getAll)

module.exports = router