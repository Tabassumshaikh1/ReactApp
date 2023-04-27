const express = require("express");
const mongoose = require('mongoose')
require("dotenv").config();
const port = process.env.PORT;
const client_id=process.env.client_id;
const client_secret = process.env.client_secret

const mainRoute = require("./Routes/index");
const cors = require("cors");
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/PizzaReact').then(()=>{
    console.log("Connection Successfull")
})
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use('/api/v1',mainRoute)
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Work on ${port}`);
});
