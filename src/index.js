import "./styles.css";
import { searchSelect, submitBtn, locationDiv, myGraph, graphHolder } from "./querySelector";
import { getWeather } from "./locationSearch";
import { modalTrigger, defaultTrigger } from "./searchModal";
import Chart from "chart.js/auto";

modalTrigger();

// Responsible for functionality to search item/location
submitBtn().addEventListener("click", () => {
    const search = searchSelect();
    defaultTrigger(); // Reverts search back to header of page
    getWeather(search.value);
})

