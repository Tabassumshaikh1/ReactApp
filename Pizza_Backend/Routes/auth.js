const express = require('express')
const Router = express.Router()
const auth = require('../Controller/auth')
Router.post('/login',auth.Login)
Router.post('/register',auth.Register)
Router.post('/getuserbyid',auth.GetUserById)
module.exports = Router