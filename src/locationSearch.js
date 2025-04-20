import { hideLoading, locationHolder, temperatureDiv, conditionsDiv, minTemp, maxTemp, iconDisplay, loadingDisplay, 
    mainDivDisplay, days } from "./querySelector";
import { getTempData, getHumidityData } from "./graph";
import { modalView, defaultTrigger } from "./searchModal";


// Initial page view upon load
modalView();

export function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&include=days%2Chours&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
            "method": "GET",
            "mode": "cors",
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
            days.forEach((func, index) => {
                const day = response.days[index + 1];
                func(day.datetime, day.temp, day.conditions);
            });

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
            hideLoading();
        });
}