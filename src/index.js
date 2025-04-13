import "./styles.css";
import { searchSelect, submitBtn, locationDiv, myGraph, graphHolder } from "./querySelector";
import { getWeather } from "./locationSearch";
import Chart from "chart.js/auto";


// Responsible for functionality to search item/location
submitBtn().addEventListener("click", () => {
    const search = searchSelect();
    const location = locationDiv();

    getWeather(search.value);
})

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [{
        label: 'Website Visitors',
        data: [120, 190, 300, 250, 220],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Visitors This Week'
        }
      }
    }
  });

/* 

1. user types location

2. Feed into the app div

3. integrate with API, pull weather

4. Pull weather data into app divs

5. Put some placeholder data there

6. Put some API handling functions in

*/ 