// File responsible for selecting items and queries on page

// Selects the search bar
export function searchSelect() {
    const searchBar = document.querySelector("#location");

    return searchBar;
}

export function submitBtn() {
    const button = document.querySelector("#button");

    return button;
}

export function locationDiv() {
    const location = document.querySelector("#locationHolder");

    return location;
}

export function temperatureDiv(temperature) {
    const temp = document.querySelector("#temp");
    temp.innerText = "Temperature: " + temperature;

    return temp;
}

export function conditionsDiv(condition) {
    const conditions = document.querySelector("#conditions");
    conditions.innerText = "Conditions: " + condition; 

    return conditions;
}

// Responsible for min temperature
export function minTemp(minimum) {
    const minTemperature = document.querySelector("#minTemp");
    minTemperature.innerText = "Minumum Temperature: " + minimum;

    return minTemperature;
}

// Responsible for max temperature
export function maxTemp(maximum) {
    const maxTemperature = document.querySelector("#maxTemp");
    maxTemperature.innerText = "Maximum Temperature:" + maximum;

    return maxTemperature;
}

// Creates loading pane when API is being created
export function loadingMsg() {
    const loading = document.createElement("div");
    loading.innerText = "Loading...";
    loading.style.display = "none";
    locationDiv().appendChild(loading);

    return loading;
}

export function locationHolder(input) {
    const locationHolder = document.querySelector("#locationName");
    locationHolder.innerText = input;

    return locationHolder;
}