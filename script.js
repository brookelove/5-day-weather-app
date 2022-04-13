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
        var searchFormEl = document.getElementById('#search-area')
        var searchid = document.getElementById('#search')




        
        searchFormEl.addEventListener('submit', searcharea);
        // getting the search to intake the city 
var searcharea = function (event) {
    event.preventDefault();
    var search = searchid.value.trim();

    if (search) {
        getCitySearch (search);
        // make container for each area 
    } else {
        alert ("please use a proper city name");
    }
};

// getting the search ID API
var getCitySearch = function (search) {
    var search = " ";
    // search API
    var searchapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + search + '&appid=23c7703d45af428f792316b5fd0b2f4f';
    fetch(searchapi)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // displayWeather(data);
                    console.log(data)
                }); 
            }else {
                alert('Error: ' + response.statusText);
            }
        });
};

// display weather of the main big one and 5 small ones 
var displayweather = function (list, weatherresults) {
    if (list.length === 0) {
        alert('There is no weather to be found');
    }

    for (var i = 0; i < list.length; i++) {
        var maintempResults = list[i].main.temp;
        var cityresults = list[i].city.name;
        var dateresults = list[i].dt_text;
        var humidityresults = list[i].main.humidity;
        var uvindexresults = list[i].main.temp_kf;
        var iconresults = list[i].weather.icon;
        // if moment() is === to the dateresults then textContent the results I want to the correct name
        console.log(maintempResults)
        console.log(cityresults)
        console.log(dateresults)
        console.log(humidityresults)
        console.log(uvindexresults)
        console.log(iconresults)
    }
}
// getCitySearch();
