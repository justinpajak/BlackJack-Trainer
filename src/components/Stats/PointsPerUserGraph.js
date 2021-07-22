import React from 'react';
import { Pie } from 'react-chartjs-2';
  
  const PieChart = ({rounds_right, rounds_wrong}) => {
    console.log(rounds_right);
    console.log(rounds_wrong);
    const data = {
      backgroundColor: 'white',
      labels: ['Right', 'Wrong'],
      datasets: [
        {
          data: [rounds_right, rounds_wrong],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    const options = {
      layout: {
        padding: 10
      },
    };

    return (
    <div>
      <div className='chart'>
        <h1 className='title'>Rounds Rigth vs Rounds Wrong</h1>
        <Pie data={data} options={options}/>
      </div>
    </div>
    );
  };
  
  export default PieChart;