# NodeExpressWeatherApp

# Introduction
This is a very basic RESTful MERN Weather App that shows the weather information from 3 cities. This weather information is injected into the database by the initializing docker script.

# App Features
There are 2 routes: the first route presents a button that allows users to enter the app.

The second route presents users with a carousel that displays the cities in the database. Only city names are presented initially, while weather information is not displayed until a user clicks on the city. Once a city’s weather data has been called/loaded, it’s placeholder loading image no longer appears.


# Technical Implementation Details
Primary Route:
Serve HTML page -->  1 button static page  (HTML/JS only no framework) (URL #1)

Second Route:
On button click serve Serve React App (Gatsby) (static files served) (URL #2)
Display Carousel
When user clicks on a city, that city’s data is called and displayed



# Steps for Dev Development
## Set up Mongo Database
1. navigate to ./docker-utils
2. docker-compose -f docker-compose-shared-mongo.yml up

## Set environment variables that will be used by Express Server
1. navigate to ./server
2. edit .env


# Swagger
1. Visit http://localhost:3001/api/docs/ for docs


# API
1. /api/dailyForecast/list







# Steps to Deploy


To continue development:
Clone repo
Docker compose up for backend (frontend is all static HTML files)
This includes database migration
Browse to the website (at localhost port 3004)


# To Do:
MVP
Authentication (JWT)
Swagger Docs
Travis CI/CD testing
etc.

