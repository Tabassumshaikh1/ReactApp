const express = require('express')
const Router = express.Router()
const pizza = require('../Controller/pizza')
Router.post('/addpizza',pizza.AddPizza)
Router.get('/getdata',pizza.GetData)
Router.post('/getdatabyid',pizza.GetDataById)
Router.post('/updatepizza',pizza.UpdatePizzadata)
Router.post('/delete',pizza.Delete)
module.exports = Router 