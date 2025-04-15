// Responsible for manipulating search modal DOM elements
import { headerSelect } from "./querySelector";

export function modalView() {
    const defaultSearch = document.querySelector("#locationSearch");
    const defaultBtn = document.querySelector("#locationBtn");

    defaultSearch.style.display = "none";
    defaultBtn.style.display = "none";
}

// Reverts page to default setting
export function defaultTrigger() {
    const defaultSearch = document.querySelector("#locationSearch");
    const defaultBtn = document.querySelector("#locationSearch");

    defaultSearch.style.display = "block";
    defaultBtn.style.display = "block";
}

// Submit button element
export function modalBtn() {
    const search = document.querySelector("#modalBtn");

    return search;
}

// Search element
export function modalSearch() {
    const search = document.querySelector("#modalSearch");

    return search;
}