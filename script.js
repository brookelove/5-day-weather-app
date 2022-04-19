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
    var searchapi = 'http://api.openweathermap.org/data/2.5/weather?q=' + search  + '&units=imperial' +'&appid=23c7703d45af428f792316b5fd0b2f4f';
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
    var latlonapi = 'http://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon +  '&units=imperial' + '&appid=23c7703d45af428f792316b5fd0b2f4f';
    fetch(latlonapi)
        .then(function (response2){
            console.log("response 2")
            // console.log(response2)
            return response2.json();
        })
        .then (function(weatherdisplay) {
            console.log(weatherdisplay)
// big card on top =================================================================
            var city = document.getElementById('cityanddate')
            city.textContent =  data.name
            var currenttemp = document.getElementById('currenttemp')
            currenttemp.textContent = "Temp: " + data.main.temp + " °C"
            var currentwind = document.getElementById('currentwind')
            currentwind.textContent = "Wind: " + weatherdisplay.daily[0].wind_gust + " MPH"
            var currenthumidity = document.getElementById('currenthumidity')
            currenthumidity.textContent = "Humidity: " + data.main.humidity + " %"
            var uvi = document.getElementById('currentuvi')
            var uvi = document.getElementById('currentuvi')
            uvi.textContent = "UV-Index: " + weatherdisplay.current.uvi
// current icon
             var weathericon1 = document.getElementById('weathericon1')
             var icon1 = data.weather[0].icon 
             console.log(icon1)
             var url1 = 'http://openweathermap.org/img/wn/' + icon1 + '@2x.png'
             console.log(url1)
             weathericon1.src = url1
            //  var weathermoji1 = document.getElementById('weathermoji-1')
             
//icons 1-5 
        //day1
             var weathericon2 = document.getElementById('weathermoji-1')
             var icon2 = weatherdisplay.daily[1].weather[0].icon
             console.log(icon2)
             var url2 = 'http://openweathermap.org/img/wn/' + icon2 + '@2x.png'
             console.log(url2)
             weathericon2.src = url2
        //day2
            var weathericon3 = document.getElementById('weathermoji-2')
            var icon3 = weatherdisplay.daily[2].weather[0].icon
            console.log(icon3)
            var url3 = 'http://openweathermap.org/img/wn/' + icon3 + '@2x.png'
            console.log(url3)
            weathericon3.src = url3
        //day3
            var weathericon4 = document.getElementById('weathermoji-3')
            var icon4 = weatherdisplay.daily[3].weather[0].icon
            console.log(icon4)
            var url4 = 'http://openweathermap.org/img/wn/' + icon4 + '@2x.png'
            console.log(url4)
            weathericon4.src = url4
        //day4
            var weathericon5 = document.getElementById('weathermoji-4')
            var icon5 = weatherdisplay.daily[4].weather[0].icon
            console.log(icon5)
            var url5 = 'http://openweathermap.org/img/wn/' + icon5 + '@2x.png'
            console.log(url5)
            weathericon5.src = url5
        //day1
            var weathericon6 = document.getElementById('weathermoji-5')
            var icon6 = weatherdisplay.daily[5].weather[0].icon
            console.log(icon6)
            var url6 = 'http://openweathermap.org/img/wn/' + icon6 + '@2x.png'
            console.log(url6)
            weathericon6.src = url6
//  to make the colors of the UV index appear  green if below 2, yellow between 3 and 5 orage between 6 and 7, red between 7 and 10, purple for above 11
            // var uvcolor = document.getElementById('currentuvi')
            // if (uvi < 2 ) {
            //     uvcolor.addClass('green');
            // } else if (3 > uvi < 5) {
            //     uvcolor.addClass('yellow');
            // } else if (6 > uvi < 7) {
            //     uvcolor.addClass('orange');
            // } else if ( 7 > uvi < 10) {
            //     uvcolor.addClass ('purple')
            // }

// 5 day forcast ====================================================================
// figure out how to get the icons to display
            // var emoji1 = document.getElementById('weathermoji-1')
            // emoji1.textContent = weatherdisplay.daily[0].weather[0].icon
        //DAY 01
        var temp1 = document.getElementById('temp1')
        temp1.textContent = "Temp: " + weatherdisplay.daily[1].temp.day + " °C"
        var wind1 = document.getElementById('wind1')
        wind1.textContent = "Wind: " + weatherdisplay.daily[1].wind_gust + " MPH"
        var humid1 = document.getElementById('humid1')
        humid1.textContent = "Humidity: " + weatherdisplay.daily[1].humidity + " %"
         //DAY 02
        var temp2 = document.getElementById('temp2')
        temp2.textContent = "Temp: " + weatherdisplay.daily[2].temp.day + " °C"
        var wind2 = document.getElementById('wind2')
        wind2.textContent = "Wind: " + weatherdisplay.daily[2].wind_gust + " MPH"
        var humid2 = document.getElementById('humid2')
        humid2.textContent = "Humidity: " + weatherdisplay.daily[2].humidity + " %"
        //DAY 03
        var temp3 = document.getElementById('temp3')
        temp3.textContent = "Temp: " + weatherdisplay.daily[3].temp.day + " °C"
        var wind3 = document.getElementById('wind3')
        wind3.textContent = "Wind: " + weatherdisplay.daily[3].wind_gust + " MPH"
        var humid3 = document.getElementById('humid3')
        humid3.textContent = "Humidity: " + weatherdisplay.daily[3].humidity + " %"
        //DAY 04
        var temp4 = document.getElementById('temp4')
        temp4.textContent = "Temp: " + weatherdisplay.daily[4].temp.day + " °C"
        var wind4 = document.getElementById('wind4')
        wind4.textContent = "Wind: " + weatherdisplay.daily[4].wind_gust + " MPH"
        var humid4 = document.getElementById('humid4')
        humid4.textContent = "Humidity: " + weatherdisplay.daily[4].humidity + " %"
        //DAY 05
        var temp5 = document.getElementById('temp5')
        temp5.textContent = "Temp: " + weatherdisplay.daily[5].temp.day + " °C"
        var wind5 = document.getElementById('wind5')
        wind5.textContent = "Wind: " + weatherdisplay.daily[5].wind_gust + " MPH"
        var humid5 = document.getElementById('humid5')
        humid5.textContent = "Humidity: " + weatherdisplay.daily[5].humidity + " %"
        })
                // displayweather(data, search);
                console.log(data)
            }); 
        } else {
            alert('Error: ' + response.statusText);
        }
    })
};

// getCitySearch();
searchBTN.addEventListener('click', searcharea);
// make it on click add a button with the city name 