const { Router } = require('express')
const { all } = require('../controllers/users.controller')
const { findUser } = require('../controllers/users.controller')
const router = Router()

router.get('/all', all)
router.get('/findUser/:id', findUser)
module.exports = router
