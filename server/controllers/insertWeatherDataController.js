"use strict";

//========================================
// Initial database seeding
// cloudy: "https://bit.ly/webApp_Assets_cloudy", returned API code (801 - 804) + 700
// rain: "https://bit.ly/webApp_Assets_rain", returned API code 300 - 522 + 900
// snow: "https://bit.ly/webApp_Assets_snow", returned API code (600 - 623)
// sunny: "https://bit.ly/webApp_Assets_sunny",  returned API code 800 
// thunderStorm: "https://bit.ly/webApp_Assets_thunderStorm"  returned API code (200 - 233)
//========================================

let date = new Date().toISOString()

exports.dataSeed = 
[
    {
        city: "Sydney",
        lat: '-33.8688',
        lon: '151.2093',  
        weather: {
            valid_date: date,
            code: 200,
            min_temp: 20,
            max_temp: 22
        }
    },
    {
        city: "Brisbane",
        lat: '-27.4698',
        lon: '153.0251',  
        weather: {
            valid_date: date,
            code: 802,
            min_temp: 24,
            max_temp: 27
        }
    }
]
