// IMPLEMENT THIS LATER
// AUTO SERVE VARS DEPENDING ON CONTEXT


require("dotenv").config({ silent: true });

let loadVariablesByEnvironment = () => {
  console.log("We are in " + process.env.ENVIRONMENT)
  
  let environmentVariables = {
    // Environment
    environment: process.env.ENVIRONMENT,
    //host
    host_swagger: process.env.HOST_SWAGGER || "localhost",
  };
  switch (environmentVariables.environment) {
    case "test":
      return loadVariableTestEnvironment(environmentVariables);
      break;
    case "development":
      return loadVariableDevEnvironment(environmentVariables);
      break;
    case "production":
      return loadVariableProductionEnvironment(environmentVariables);
      break;
    default:
      return loadVariableProductionEnvironment(environmentVariables);
      break;
  }
};

let loadVariableTestEnvironment = environmentVariables => {
  // Database connection information
  environmentVariables.database = process.env.DB_TEST;
  // Setting port for server
  environmentVariables.port = process.env.PORT_TEST || 3030;

  
  return environmentVariables;
};
let loadVariableDevEnvironment = environmentVariables => {
  // Database connection information
  environmentVariables.database = process.env.DB_DEV;
  // Setting port for server
  environmentVariables.port = 3000;

  
  return environmentVariables;
};

let loadVariableProductionEnvironment = environmentVariables => {
  // Database connection information
  environmentVariables.database = process.env.DB;
  // Setting HTTP port for HTTP server
  environmentVariables.port =  3000;

  return environmentVariables;
};
module.exports = loadVariablesByEnvironment();
