

const express =require('express')
const router = express.Router()

const homeController = require('../app/controller/HomeController')


router.post('/', homeController.homeResult)
router.get('/', homeController.home)

module.exports = router
