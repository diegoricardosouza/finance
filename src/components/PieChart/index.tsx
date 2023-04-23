import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export interface PieChartProps {
  data: number[]
}

const PieChart = ({ data }: PieChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#FFF'
        }
      },
      Tooltip: true,
      title: {
        display: true
      }
    }
  }

  const dataChart = {
    labels: ['Alimentação', 'Despesa', 'Mercado', 'Salário'],
    datasets: [
      {
        label: 'Valor',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 2
      }
    ]
  }
  return <Pie data={dataChart} options={options} />
}

export default PieChart
