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
    locationDiv().appendChild(loading);

    return loading;
}