const express = require("express"),
  config = require("./config/main_config"),
  dailyForecastRouter = require("./routes/dailyForecastRoute"),
  getCityWeatherDataRouter = require("./routes/getCityWeatherDataRoute"),
  insertWeatherDataRouter = require('./routes/insertWeatherDataRoute');
  

// Manage api response.
let manageResponse = (err, status, response, res, next) => {
  if (err) next(err);
  sendResponse(status, response, res);
};

// Send a status response
let sendResponse = (status, response, res) => {
  return res.status(status).json(response);
};

// Send error response
let sendError = (status, message, error, res) => {
  sendResponse(
    status,
    {
      ok: false,
      error: { message: message, error: error }
    },
    res
  );
};




module.exports = function(app) {
  // Initializing route groups

  const apiRoutes = express.Router();
  // Set url for API group routes
  app.use("/api", apiRoutes);
  
  dailyForecastRouter.init(apiRoutes, manageResponse);
  insertWeatherDataRouter.init(apiRoutes, manageResponse)
  
  getCityWeatherDataRouter.init(apiRoutes, manageResponse)


  // Ping routes
  // i.e. http://localhost:8080/api/ping
  apiRoutes.get("/ping", function(req, res) {
    res.status(200).json({
      ok: true
    });
  });







  // Handle errors Development or test environment
  if (config.environment === "development" || config.environment === "test") {
    // Handle Errors in api rest
    apiRoutes.use((err, req, res, next) => {
      //TODO Just for development mode
      console.log(err);
      sendError(err.status || 500, err.message || "", err, res);
    });
  }

  // Handle errors Production environment
  if (config.environment !== "development" && config.environment !== "test") {
    // Handle Errors in api rest
    apiRoutes.use((err, req, res, next) => {
      sendError(err.status || 500, err.message, { message: err.message }, res);
    });
  }

  // Handle 404 error.
  app.use("*", (req, res) => {
    //TODO Just for development mode
    // console.log(req);
    sendError(404, "Route Not Found", req.originalUrl, res);
  });
};
