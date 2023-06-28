var searchButton = $("#search-button");
var searchInput = $("#search-name");
var results = $(".city-info");
var APIKey= "7c70b0caae6d11d6ae6906da7db91790";



var cityFetch = function(city) {
    if (city === "") {
        return;
    }
    
    
    var weatherAPIurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    fetch (weatherAPIurl)
    .then (function(response) {
        return response.json();
        
    })   
    .then (function (data){
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data));

        var cityResults=document.getElementById("city");
        cityResults.textContent = data.name;
        
        var tempResults=document.getElementById("temp");
        tempResults.textContent = "Temp: " + data.main.temp + " F";
        
        var windResults=document.getElementById("wind");
        windResults.textContent = "Wind: " + data.wind.speed + " MPH";
        
        var humidResults=document.getElementById("humidity");
        humidResults.textContent = "Humidity: " + data.main.humidity + " %";

        var iconResults=document.getElementById("icon");
        iconResults.setAttribute( "src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")

        var dateCurrent = dayjs().format('(M/D//YYYY)');
        $("#currentdate").html(dateCurrent);
        
        
        

        
       
    var fiveDayUrl= "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
        fetch (fiveDayUrl)
        .then(function(response) {
            console.log("check")
            return response.json();
         })
    .then (function(response){
        console.log(response)
        
        //day one
        var tempResultsOne=document.getElementById("temp-one");
        tempResultsOne.textContent = "Temp: " + response.list[0].main.temp + " F";
        
        var windResultsOne=document.getElementById("wind-one");
        windResultsOne.textContent = "Wind: " + response.list[0].wind.speed + " MPH";
        
        var humidResultsOne=document.getElementById("humidity-one");
        humidResultsOne.textContent = "Humidity: " + response.list[0].main.humidity + " %";
        
        var iconResultsOne=document.getElementById("icon-one");
        iconResultsOne.setAttribute( "src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png")

        var dateOne = dayjs(response.list[0].dt_txt).format('(M/D//YYYY)');
        $("#date-one").html(dateOne);
        
        
        //day two
        var tempResultsTwo=document.getElementById("temp-two");
        tempResultsTwo.textContent = "Temp: " + response.list[8].main.temp + " F";
        
        var windResultsTwo=document.getElementById("wind-two");
        windResultsTwo.textContent = "Wind: " + response.list[8].wind.speed + " MPH";
        
        var humidResultsTwo=document.getElementById("humidity-two");
        humidResultsTwo.textContent = "Humidity: " + response.list[8].main.humidity + " %";

        var iconResultsTwo=document.getElementById("icon-two");
        iconResultsTwo.setAttribute( "src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png");

        var dateTwo = dayjs(response.list[8].dt_txt).format('(M/D//YYYY)');
        $("#date-two").html(dateTwo);
        



        //day three
        var tempResultsThree=document.getElementById("temp-three");
        tempResultsThree.textContent = "Temp: " + response.list[16].main.temp + " F";
        
        var windResultsThree=document.getElementById("wind-three");
        windResultsThree.textContent = "Wind: " + response.list[16].wind.speed + " MPH";
        
        var humidResultsThree=document.getElementById("humidity-three");
        humidResultsThree.textContent = "Humidity: " + response.list[16].main.humidity + " %";

        var iconResultsThree=document.getElementById("icon-three");
        iconResultsThree.setAttribute( "src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png");

        var dateThree = dayjs(response.list[16].dt_txt).format('(M/D//YYYY)');
        $("#date-three").html(dateThree);



        //day four
        var tempResultsFour=document.getElementById("temp-four");
        tempResultsFour.textContent = "Temp: " + response.list[24].main.temp + " F";
        
        var windResultsFour=document.getElementById("wind-four");
        windResultsFour.textContent = "Wind: " + response.list[24].wind.speed + " MPH";
        
        var humidResultsFour=document.getElementById("humidity-four");
        humidResultsFour.textContent = "Humidity: " + response.list[24].main.humidity + " %";

        var iconResultsFour=document.getElementById("icon-four");
        iconResultsFour.setAttribute( "src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png");

        var dateFour = dayjs(response.list[24].dt_txt).format('(M/D//YYYY)');
        $("#date-four").html(dateFour);



        //day five
        var tempResultsFive=document.getElementById("temp-five");
        tempResultsFive.textContent = "Temp: " + response.list[32].main.temp + " F";
        
        var windResultsFive=document.getElementById("wind-five");
        windResultsFive.textContent = "Wind: " + response.list[32].wind.speed + " MPH";
        
        var humidResultsFive=document.getElementById("humidity-five");
        humidResultsFive.textContent = "Humidity: " + response.list[32].main.humidity + " %";

        var iconResultsFive=document.getElementById("icon-five");
        iconResultsFive.setAttribute( "src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png");

        var dateFive = dayjs(response.list[32].dt_txt).format('(M/D//YYYY)');
        $("#date-five").html(dateFive);



       

    })
    }
    );

 
    
    }
     

searchButton.on("click", function(event) {
    event.preventDefault();
    var city = searchInput.val();
    city = city.toLowerCase();
    cityFetch(city);
});


