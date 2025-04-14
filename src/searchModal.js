// Responsible for manipulating search modal DOM elements

// Reverts search to a modal (upon page being initialized)
export function modalTrigger() {
    const modalSearch = document.querySelector("#locationSearch");
    const modalBtn = document.querySelector("#locationBtn");

    modalSearch.id = "modalSearch";
    modalBtn.id = "modalBtn";

    return modalSearch;
    return modalBtn;
}

// Reverts page to default setting
export function defaultTrigger() {
    const defaultSearch = document.querySelector("#modalSearch");
    const defaultBtn = document.querySelector("#modalBtn");

    defaultSearch.id = "locationSearch";
    defaultBtn.id = "locationBtn";

    return defaultSearch;
    return defaultBtn;
}