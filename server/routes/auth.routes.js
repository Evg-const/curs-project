const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')


router.post('/registration',
    [
        check('email', "Incorrect email").isEmail(),
        check('password', 'Password must be longer than 1 and shorter than 12 symbols').isLength({min: 1, max: 12}),
        check('name', 'Name must be longer than 1 symbol').isLength({min: 1, max: 24}),
        check('surname', 'Surname must be longer than 1 symbol').isLength({min: 1, max: 24})
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            let array = []
            errors.array().forEach(e => array.push(e.msg))
            return res.status(400).json({message: "Uncorrect request: " + array})
        }

        const {email, password, name, surname} = req.body
        const candidate = await User.findOne({email})

        if(candidate){
            return res.status(400).json({message: 'User with email: ' + email + ' already exist'})
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword, name, surname, registrationDate: Date.now()})
        await user.save()
        return res.json({message: 'User with email: ' + email + ' was created'})
    }
    catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/login',
    async (req, res) =>{
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user){
                return res.status(400).json({message: "User not found"})
            }
            const  isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid){
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    status: user.status,
                    role: user.role,
                    registrationDate: user.registrationDate
                }
            })
        }
        catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    surname: user.surname,
                    status: user.status,
                    role: user.role,
                    registrationDate: user.registrationDate
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })


module.exports = router