// Responsible for manipulating search modal DOM elements
import { headerSelect } from "./querySelector";

// Removes p tag when default view is shown
export function pTagRemove() {
    const tag = document.querySelector("#pTag");
    tag.style.display = "none";
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