import React from 'react';
import { Line } from 'react-chartjs-2';
  
  const LineChart = ({points}) => {
    const data = {
      backgroundColor: 'white',
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: 'Points Gained Per Day',
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    return (
    <div>
      <div className='chart'>
        <h1 className='title'>Line Chart</h1>
        <Line data={data} options={options}/>
      </div>
    </div>
    );
  };
  
  export default LineChart;