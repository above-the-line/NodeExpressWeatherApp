const DailyForecastSchema = require('./../models/dailyForecastSchema')


"use strict";

//========================================
// List function
//========================================
exports.list = async function (req, res, next){
    const data = await DailyForecastSchema.find()
    console.log(data)
    return data
}


