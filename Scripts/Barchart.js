const DATA_COUNT1 = 7;
const NUMBER_CFG1 = {count: DATA_COUNT1, min: -100, max: 100};

// Function to generate an array of random numbers within a given range
function generateRandomNumbers(config) {
    return Array.from({ length: config.count }, () => Math.floor(Math.random() * (config.max - config.min + 1)) + config.min);
}

// Function to generate labels for the chart
function generateLabels(count) {
    return Array.from({ length: count }, (_, index) => `Label ${index + 1}`);
}

const labels1 = generateLabels(DATA_COUNT1);

const data1 = {
    labels: labels1,
    datasets: [
        {
            label: 'Totall Girls',
            data: generateRandomNumbers(NUMBER_CFG1),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
        {
            label: 'Total Boys',
            data: generateRandomNumbers(NUMBER_CFG1),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
        }
    ]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Bar Chart'
        }
      }
    },
  };


const ctx1 = document.getElementById('myChartBar').getContext('2d');
const myChart1 = new Chart(ctx1, config1);