const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { db } = require("./database");
require("dotenv").config();
const {apiRoute} = require('./module/index')


// ====middleware

app.use(cors())
app.options("*", cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// ====ROUTING
apiRoute(app)



// ====DATABASE

db.on("error", console.error.bind(console, "database connect error !"))
db.once('open', ()=>{
  console.log("database sekarang terkoneksi")
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
  console.log(`server is running in ${PORT}`)
})