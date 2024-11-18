import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = () => {
  const labels = ['Mantenimiento', 'Electricidad', 'Limpieza', 'Seguridad', 'Agua', 'Otros']
  const data = [32904, 21936, 16452, 10968, 8226, 5484]

  // Configuración de los datos para Chart.js
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Gastos Comunes',
        data,
        backgroundColor: [
          '#FF6384', // Color para Mantenimiento
          '#36A2EB', // Color para Electricidad
          '#FFCE56', // Color para Limpieza
          '#4BC0C0', // Color para Seguridad
          '#9966FF', // Color para Agua
          '#FF9F40' // Color para Otros
        ],
        borderColor: '#fff',
        borderWidth: 1
      }
    ]
  }

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'right'
      },
      maintainAspectRatio: false,
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ''
            const value = context.raw || 0
            return `${label}: $${value.toLocaleString()}`
          }
        }
      }
    }
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '450px', height: '100%', textAlign: 'center', marginLeft: '60px' }}>
      <Pie data={chartData} options={options} />
    </div>
  )
}
