// Env vars
require("dotenv").config({ silent: true });

const express = require("express");
const insertWeatherDataController = require("../controllers/insertWeatherDataController");
const MongoDBCollectionName = process.env.MONGO_COLLECTION_NAME


module.exports.init = function(apiRoutes, manageResponse) {
  const insertWeatherDataRouter = express.Router();
  
  console.log("seeding database with the following")
  console.log(insertWeatherDataController.dataSeed)

  apiRoutes.use("/insertWeatherData", insertWeatherDataRouter);
  insertWeatherDataRouter.route("/seed", function(req, res) {
    MongoDBCollectionName.insertMany(    
        insertWeatherDataController.dataSeed
    );
  });
};

