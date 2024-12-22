/** 
 * 1.create a database in mongodb atlas
 * 2.prepared postman
 * 3.first initialize package.json
 * 4.npm init  -y 
 * installing dependencies...
 * npm i express mongoose dotenv node-geocoder cors
 * now import all the necessary modules
 * first load dotenv varibales...to do so
 * dotenv.config({"path : ??"}) -> in this config funtion we need to create object which is path, in path there will be a specified path.. 
 * now initialize port from the config folder's config.env file... 
 * now body parser middleware to send data to api
 * app.use(express.json())
 * now enable cors
 * app.use(cors())
 * sample servers:
 * app.get("/api/v1/stores",(req,res)=>{})-> this is just a demo route to check if the process is okay..all the router will be in differnet folder... 
 * now app.listen(PORT, callback function)----->---> this will be the last line of the server.js file... 
 * after app.use("cors()");
 * app.use("/api/v1/stores", require("./routes/stores"))
 * 
 * 
 * create a new folder name routes , in there create a file name stores.js
 * now import express
 * now use router 
 * const router = express.Route()
 * router.get("/",(req,res)=>{
    res.send("Hello"); -->this respond will be in controllers file to handle the responds... 
})
 * now export router:
 * module.exports = router;
 * 
 * 
 * create a new folder name controllers.. and a file in it name storecontroller 
 * in this storte conrotller file we will use 
 * @description get all stores
 * @route get /api/v1/stores
 * @access Public
 * exports.getStores = (req,res,next)=>{
    res.send("Hello");
}
 * now we will exports these.
 *
 * now in the router.js file we will pass this line of code
 * router.route("/").get(getStores); 
 * 
 * app.use("/api/v1/stores", require("./routes/stores"))
 *app.use("/api/v1/stores", require("./routes/stores"))

 * when someone write this url.. it will take to the route.js file,then there it will get the respond(res) from the storecontroller.js ..then the respond from the controller file will go to the user... 
  *
  * 
  * 
  * Now we will connect the database... 
  * 
  * 
  * Now create folder name models, and in there create a file name storemodel.js
  * in this file we will create a schema for the database.. 
  * 
  * 
  * after completing the schema, we will import this schema in the storecontroller file..
  * where we can send response of the stores...
  * const StoreModel = require("../models/StoreModel")
  exports.getStores = async (req,res,next)=>{
      
      try {
          const stores = await StoreModel.find();
  
          return res.status(200).json({
              success : true,
              count : stores.length,
              data : stores 
          })
          
      } catch (error) {
          console.error(err);
          res.status(500).json({error : `server error`})
          
      }
  }
 
  *
  * now add a new route in add store...in the controller add a new method name addstore..which will add store.. 
  * add geocoder
  * 







*/