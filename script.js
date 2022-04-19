console.log("hello world")
// PSUEDOCODE 
// 1. search for the city 
        // function for add advent listener to click search
            // 5 day forecast to include date, icon of the day, temp, wind, humidity 
            // in teh larger one: City name, date, temp, wind, humidity, UV index
//   a. using moment for the date
// 2. save the recent search
        // local storage for the search 
        //add an element of the city name
// 3. view UV index 
        // if-else statement of uv index colors 
        
        // WORKSPACE
        // original API link and web query
        // var APIkey = "23c7703d45af428f792316b5fd0b2f4f";
        // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
var searchFormEl = document.getElementById('search-area')
var searchBTN = document.getElementById('search')
var fiveday = document.getElementById('5dayweathercontainer')

        // getting the search to intake the city 
var searcharea = function (event) {
    event.preventDefault();
        var search = searchFormEl.value.trim();
        if (search) {
            getCitySearch(search);
    // make container for each area 
            searchFormEl.value = '';
        } else {
            alert ("please use a proper city name");
        }

};

// getting the search ID API
var getCitySearch = function (search) {
    var searchapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=23c7703d45af428f792316b5fd0b2f4f';
    // console.log(searchapi)
    fetch(searchapi)
    .then(function (response) {
        if (response.ok) {
            console.log("response 1")
            // console.log(response)
            return response.json()
    .then(function (data) {
    var citylatlon = JSON.parse(localStorage.getItem('search')) || []
        citylatlon.push(data.name);
        // console.log(data)
    var latlonapi = 'http://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&appid=23c7703d45af428f792316b5fd0b2f4f';
    fetch(latlonapi)
        .then(function (response2){
            console.log("response 2")
            // console.log(response2)
            return response2.json();
        })
        .then (function(weatherdisplay){
            console.log(weatherdisplay)
// big card on top =================================================================
            var city = document.getElementById('cityanddate')
            city.textContent = data.name
            var currenttemp = document.getElementById('currenttemp')
            currenttemp.textContent = "Temp: " + data.main.temp + " °C"
            var currentwind = document.getElementById('currentwind')
            currentwind.textContent =  "Wind: " + data.wind.gust + " MPH"
            var currenthumidity = document.getElementById('currenthumidity')
            currenthumidity.textContent = "Humidity: " + data.main.humidity + " %"
            var uvi = document.getElementById('currentuvi')
            var uvi = weatherdisplay.current.uvi + "got it!"
            console.log(uvi)



// 5 day forcast ====================================================================
// figure out how to get the icons to display
            var day1 = document.getElementById('weathermoji-1')
            var day1 = weatherdisplay.daily[0].weather[0].icon
            console.log(day1)
        })
                // displayweather(data, search);
                console.log(data)
            }); 
        } else {
            alert('Error: ' + response.statusText);
        }
    })
    // .catch (function (error){
    //     alert('Unable to connect to Weather website');
    // });
};

// display weather of the main big one and 5 small ones 
// var displayweather = function (list, weatherresults) {
//     if (list.length === 0) {
//         alert('There is no weather to be found');
//     }
//         var maintempResults = data.main.temp;
//         var cityresults = data.main.name;
//         var dateresults = list[i].dt_text;
//         var humidityresults = main.humidity;
//         var uvindexresults = list[i].main.temp_kf;
//         var iconresults = list[i].weather.icon;
//         // if moment() is === to the dateresults then textContent the results I want to the correct name
//         console.log(maintempResults)
//         console.log(cityresults)
//         console.log(dateresults)
//         console.log(humidityresults)
//         console.log(uvindexresults)
//         console.log(iconresults)

// }
// getCitySearch();
searchBTN.addEventListener('click', searcharea);
