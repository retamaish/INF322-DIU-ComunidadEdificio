import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Data } from './data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const LineChart = () => {
  const [chartData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: 'Gasto común',
        data: Data.map((data) => data.ggcc),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#f3ba2f'
        ],
        borderColor: '#6388c7',
        borderWidth: 2
      }
    ]
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Evolución de gastos comunes'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div style={{ width: '450px', height: 'auto', marginLeft: '10%' }}>
      <Line id={1} data={chartData} options={options} />
    </div>
  )
}
