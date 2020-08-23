const express = require("express");
const getCityWeatherDataController = require("../controllers/getCityWeatherDataController");

module.exports.init = function(apiRoutes, manageResponse) {
  const getCityWeatherDataRoute = express.Router();
  
  // i.e.  api/getCityWeatherData/{cityName}
  apiRoutes.use("/getCityWeatherData", getCityWeatherDataRoute);
  getCityWeatherDataRoute.get("/", function(req, res, next) {
    getCityWeatherDataController.list(null, (err, status, response) => {
      manageResponse(err, status, response, res, next);
    });
  });
};