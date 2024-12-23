const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const connectDB = require("./config/db")


//load env vars
dotenv.config({path:'./config/config.env'});

//Connect to DB
connectDB();

//initalize the express 
const app = express();

const PORT = process.env.PORT || 5000;

//Body parser
app.use(express.json())

//enable cors 
app.use(cors())

// sample routes 
// app.get("/api/v1/stores",(req,res)=>{
//     res.send("Hello");
// })

//Set Static folder
app.use(express.static(path.join(__dirname,'public')))

//Routes..
app.use("/api/v1/stores", require("./routes/stores"))

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode  on port ${PORT}`)
})