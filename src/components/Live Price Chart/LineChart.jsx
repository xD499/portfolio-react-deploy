import { Line } from "react-chartjs-2";
import React, { useState } from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function LineChart({liveData}){
  const cappedLiveData = liveData.slice(-60);
  const series = cappedLiveData.map((_, index)=>index+1)
  const data = {
    labels: series,
    datasets: [
      {
        label: 'Live Price',
        data: cappedLiveData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};
