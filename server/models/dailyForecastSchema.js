const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  

//================================
// Daily Forecast Schema
//================================
const DailyForecastSchema = new Schema(
  {
    city: { 
        type: String,
    },
    lat: {
        required: true,
        type: Number
    },
    lon: {
      required: true,
      type: Number
    },  
    weather: {
        valid_date: Date,
        code: String,
        min_temp: Number,
        max_temp: Number
    }
  }
);

module.exports = mongoose.model("DailyForecastSchema", DailyForecastSchema);
