import { loadingMsg, locationHolder, temperatureDiv, conditionsDiv } from "./querySelector";

// Responsible for the functionality for searching a location
const loading = loadingMsg();


export function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?unitGroup=us&include=days%2Chours&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
            "method": "GET",
            "mode": "cors",
            "headers": {
            }
        })

        .then(function(response) {
            loading.style.display = "block";
            return response.json();
        })

        .then(function(response) {

            // Remove loading screen
            loading.style.display = "none";

            // Getting the data we need
            console.log(response);

            // Provides location name
            locationHolder(response.resolvedAddress);
            temperatureDiv(response.days[0].temp);
            conditionsDiv(response.days[0].conditions);
        })

        .catch(err => {
            console.error(err);
            alert("Please enter a valid entry");
            loading.style.display = "none";
        });
}