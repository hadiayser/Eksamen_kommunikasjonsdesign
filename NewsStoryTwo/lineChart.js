
  // Select the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Define your data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [10, 25, 32, 42, 55, 60],
      borderColor: 'blue',
      fill: false, // To create a line without fill
    },
  ],
};

// Create the chart
new Chart(ctx, {
  type: 'line',
  data: data,
})
