import { hideLoading, locationHolder, temperatureDiv, conditionsDiv, minTemp, maxTemp, dayOne,
    dayTwo, dayThree, dayFour, dayFive, daySix, daySeven, iconDisplay, graphHolder, mainDiv,
    loadingDisplay, mainDivDisplay } from "./querySelector";
import { getTempData, getHumidityData } from "./graph";
import { modalView, defaultTrigger } from "./searchModal";


// Initial page view upon load
modalView();

export function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?unitGroup=us&include=days%2Chours&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
            "method": "GET",
            "mode": "cors",
            "headers": {
            }
        })

        .then(function(response) {
            loadingDisplay();
            return response.json();
        })

        .then(function(response) {

            // Remove loading screen
            hideLoading();

            // Loads weather page
            mainDivDisplay();
            
            // Getting the data we need
            console.log(response);

            // Provides location name
            locationHolder(response.resolvedAddress);
            temperatureDiv(response.days[0].temp);
            conditionsDiv(response.days[0].conditions);
            minTemp(response.days[0].tempmin);
            maxTemp(response.days[0].tempmax);

            // Provides telemetry on day temperatures
            dayOne(response.days[1].datetime, response.days[1].temp, response.days[1].conditions);
            dayTwo(response.days[2].datetime, response.days[2].temp, response.days[2].conditions);
            dayThree(response.days[3].datetime, response.days[3].temp, response.days[3].conditions);
            dayFour(response.days[4].datetime, response.days[4].temp, response.days[4].conditions);
            dayFive(response.days[5].datetime, response.days[5].temp, response.days[5].conditions);
            daySix(response.days[6].datetime, response.days[6].temp, response.days[6].conditions);
            daySeven(response.days[7].datetime, response.days[7].temp, response.days[7].conditions);

            // Feeds an icon to UI
            iconDisplay(response.days[0].icon);
            
            // Assign array to variable
            const firstDay = response.days[0];
            const hourlyTemps = firstDay.hours.map(hour => hour.temp);
            const hourlyHumidity = firstDay.hours.map(hour => hour.humidity);


            // Feeds above into our graph array
            getTempData(hourlyTemps);
            getHumidityData(hourlyHumidity)
        })

        .catch(err => {
            console.error(err);
            alert("Please enter a valid entry");
            loading.style.display = "none";
        });
}