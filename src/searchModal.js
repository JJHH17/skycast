// Responsible for manipulating search modal DOM elements
import { headerSelect } from "./querySelector";

// Adds P tag title to modal
function pTag() {
    const tag = document.createElement("p");
    headerSelect().appendChild(tag);
    tag.textContent = "Find a Forecast";
    tag.id = "pTag";
}

// Removes p tag when default view is shown
function pTagRemove() {
    const tag = document.querySelector("#pTag");
    tag.remove();
}

// Reverts search to a modal (upon page being initialized)
export function modalTrigger() {
    const modalSearch = document.querySelector("#locationSearch");
    const modalBtn = document.querySelector("#locationBtn");

    pTag();

    modalSearch.id = "modalSearch";
    modalBtn.id = "modalBtn";
}

// Reverts page to default setting
export function defaultTrigger() {
    const defaultSearch = document.querySelector("#modalSearch");
    const defaultBtn = document.querySelector("#modalBtn");

    pTagRemove();

    defaultSearch.id = "locationSearch";
    defaultBtn.id = "locationBtn";
}