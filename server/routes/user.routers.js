const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/auth.middleware')



router.get("", authMiddleware, UserController.getUsers)

module.exports = router