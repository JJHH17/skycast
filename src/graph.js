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
        label: 'Temperature Changes',
        data: [],
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
          text: 'Temperature Splits'
        }
      }
    }
  });

// Feeds data into myChart
export function getTempData(data) {
  myChart.data.datasets[0].data = data;
  myChart.update();
}