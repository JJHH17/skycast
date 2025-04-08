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