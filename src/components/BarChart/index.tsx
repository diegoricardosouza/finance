import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export interface LineChartProps {
  data: {
    labels: string[]
    datasets: {
      labelOne: string
      dataOne: string[] | number[]
      labelTwo: string
      dataTwo: string[] | number[]
    }
  }
}

const BarChart = ({ data }: LineChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#FFF' // muda a cor das legendas para verde
        }
      },
      Tooltip: true,
      title: {
        display: true
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#FFF'
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: '#FFF'
        }
      }
    }
  }

  const dataChart = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasets.labelOne,
        data: data.datasets.dataOne,
        fill: false,
        borderColor: '#4318FF',
        backgroundColor: '#4318FF',
        borderWidth: 0
      },
      {
        label: data.datasets.labelTwo,
        data: data.datasets.dataTwo,
        fill: false,
        borderColor: '#39B8FF',
        backgroundColor: '#39B8FF',
        borderWidth: 0
      }
    ]
  }
  return <Bar data={dataChart} options={options} width={400} height={450} />
}

export default BarChart
