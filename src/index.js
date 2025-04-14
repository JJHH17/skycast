import "./styles.css";
import { searchSelect, submitBtn, locationDiv, myGraph, graphHolder } from "./querySelector";
import { getWeather } from "./locationSearch";
import Chart from "chart.js/auto";



// Responsible for functionality to search item/location
submitBtn().addEventListener("click", () => {
    const search = searchSelect();

    getWeather(search.value);
})

