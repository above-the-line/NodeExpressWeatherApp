const express = require("express");
const dailyForecastController = require("./../controllers/dailyForecastController");

module.exports.init = function(apiRoutes, manageResponse) {
  const dailyForecastRoute = express.Router();
  
  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use("/dailyForecast", dailyForecastRoute);
  dailyForecastRoute.get("/list", function(req, res, next) {
    dailyForecastController.list(null, (err, status, response) => {
      manageResponse(err, status, response, res, next);
    });
  });
};
