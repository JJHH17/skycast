// Responsible for manipulating search modal DOM elements
import { headerSelect } from "./querySelector";

// Adds P tag title to modal
function pTag() {
    const tag = document.createElement("p");
    headerSelect().appendChild(tag);
    tag.textContent = "Find a Forecast";
    tag.id = "pTag";
}

// Returns p tag if it exists
export function pTagCheck() {
    const tag = document.querySelector("#pTag");

    return tag;
}

// Removes p tag when default view is shown
export function pTagRemove() {
    const tag = document.querySelector("#pTag");
    tag.style.display = "none";
}

// Reverts search to a modal (upon page being initialized)
export function modalTrigger() {
    const modalSearch = document.querySelector("#locationSearch");
    const modalBtn = document.querySelector("#locationBtn");

    if (modalSearch && modalBtn) {
        pTag();
        modalSearch.id = "modalSearch";
        modalBtn.id = "modalBtn";
    }
}

// Reverts page to default setting
export function defaultTrigger() {
    const defaultSearch = document.querySelector("#modalSearch");
    const defaultBtn = document.querySelector("#modalBtn");

    if (defaultSearch && defaultBtn) {
        defaultSearch.id = "locationSearch";
        defaultBtn.id = "locationBtn";
    }
}