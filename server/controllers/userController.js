const User = require('../models/User')


class UserController {
    async getUsers(req, res) {
        try {
            const users = await User.find()
            return res.json(users)


        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Can not get users"})
        }
    }
}
module.exports = new UserController()