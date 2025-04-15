import "./styles.css";
import { searchSelect, submitBtn, locationDiv, myGraph, graphHolder } from "./querySelector";
import { getWeather } from "./locationSearch";
import { defaultTrigger, modalBtn, modalSearch } from "./searchModal";
import Chart from "chart.js/auto";

// Responsible for initial page modal search
modalBtn().addEventListener("click", () => {
    const search = modalSearch();
    getWeather(search.value);
})

// Responsible for functionality to search item/location
submitBtn().addEventListener("click", () => {
    const search = searchSelect();
    defaultTrigger(); // Reverts search back to header of page
    getWeather(search.value);
})

