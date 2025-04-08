import { loadingMsg } from "./querySelector";

// Responsible for the functionality for searching a location

export function getWeather(location) {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
        ${location}?unitGroup=us&include=days%2Chours&key=WE5SWL7PXQVWZVJPQW6JNH35P&contentType=json`, {
            "method": "get",
            "mode": "cors",
            "headers": {
            }
        })
        .then(function(response) {
            loadingMsg();
            return response.json;
        })
        .then(function(response) {

            // Remove loading screen
            loadingMsg().style.display = "none";

            // Getting the data we need
            console.log(response);

        })

        .catch(err => {
            console.error(err);
            alert("Please enter a valid entry");
            loadingMsg().style.display = "none";
        });
}