// File responsible for selecting items and queries on page

// Selects the search bar
export function searchSelect() {
    const searchBar = document.querySelector("#locationSearch");

    return searchBar;
}

export function submitBtn() {
    const button = document.querySelector("#locationBtn");

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

export function dayOne(date, temp, condition) {
    const day = document.querySelector("#day1Date");
    const oneTemp = document.querySelector("#oneTemp");
    const oneCond = document.querySelector("#oneConditions");

    day.innerText = date;
    oneTemp.innerText = temp;
    oneCond.innerText = condition;

}

export function dayTwo(date, temp, condition) {
    const day = document.querySelector("#day2Date");
    const twoTemp = document.querySelector("#twoTemp");
    const twoCond = document.querySelector("#twoConditions");

    day.innerText = date;
    twoTemp.innerText = temp;
    twoCond.innerText = condition;

}

export function dayThree(date, temp, condition) {
    const day = document.querySelector("#day3Date");
    const threeTemp = document.querySelector("#threeTemp");
    const threeCond = document.querySelector("#threeConditions");

    day.innerText = date;
    threeTemp.innerText = temp;
    threeCond.innerText = condition;

}

export function dayFour(date, temp, condition) {
    const day = document.querySelector("#day4Date");
    const fourTemp = document.querySelector("#fourTemp");
    const fourCond = document.querySelector("#fourConditions");

    day.innerText = date;
    fourTemp.innerText = temp;
    fourCond.innerText = condition;

}

export function dayFive(date, temp, condition) {
    const day = document.querySelector("#day5Date");
    const fiveTemp = document.querySelector("#fiveTemp");
    const fiveCond = document.querySelector("#fiveConditions");

    day.innerText = date;
    fiveTemp.innerText = temp;
    fiveCond.innerText = condition;

}

export function daySix(date, temp, condition) {
    const day = document.querySelector("#day6Date");
    const sixTemp = document.querySelector("#sixTemp");
    const sixCond = document.querySelector("#sixConditions");

    day.innerText = date;
    sixTemp.innerText = temp;
    sixCond.innerText = condition;

}

export function daySeven(date, temp, condition) {
    const day = document.querySelector("#day7Date");
    const sevenTemp = document.querySelector("#sevenTemp");
    const sevenCond = document.querySelector("#sevenConditions");

    day.innerText = date;
    sevenTemp.innerText = temp;
    sevenCond.innerText = condition;

}