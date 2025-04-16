// File responsible for handling graph logic
import Chart from "chart.js/auto";

const ctx = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(ctx,{
    type: 'line',
    data: {
      labels: ['00:00', '01:00', '02:00', '03:00', '04:00',
        '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
        '19:00', '20:00', '21:00', '22:00', '23:00',
      ],
      datasets: [{
        label: 'Temperature',
        data: [],
        fill: true,
        borderColor: 'rgb(5, 24, 24)',
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
          text: 'Day Temperature Change'
        }
      }
    }
  });

// Feeds data into myChart
export function getTempData(data) {
  myChart.data.datasets[0].data = data;
  myChart.update();
}

// Humidity chart
const humidityCht = document.getElementById("humidityChart").getContext("2d");

// Defining the chart
let humidityChart = new Chart(humidityCht,{
  type: 'line',
  data: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00',
      '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
      '19:00', '20:00', '21:00', '22:00', '23:00',
    ],
    datasets: [{
      label: 'Humidity',
      data: [],
      fill: true,
      borderColor: 'rgb(5, 24, 24)',
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
        text: 'Day Humidity Change'
      }
    }
  }
});

// Feeds data into humidity chart
export function getHumidityData(data) {
  humidityChart.data.datasets[0].data = data;
  humidityChart.update();
}