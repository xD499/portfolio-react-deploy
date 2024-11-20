import React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineGraph() {
    const options = {}
    const data = {}
    return (
    <>
      <Line options={options} data={data}/>
    </>
  );
}
