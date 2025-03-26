// File: src/components/dashboard/DashboardChart.js
import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

const DashboardChart = () => {
  // Sample data - in a real app, this would come from an API
  const data = {
    labels: ['CSE', 'ECE', 'Mechanical', 'Civil', 'EEE', 'IT'],
    datasets: [
      {
        label: 'Attendance (%)',
        data: [92, 87, 83, 89, 86, 94],
        borderColor: 'rgba(0, 123, 255, 0.7)',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Performance Score',
        data: [88, 78, 75, 81, 80, 85],
        borderColor: 'rgba(40, 167, 69, 0.7)',
        backgroundColor: 'rgba(40, 167, 69, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <div>
      <Line data={data} options={options} height={80} />
      <div className="text-center mt-3">
        <small className="text-muted">Department-wise performance comparison for current semester</small>
      </div>
    </div>
  );
};

export default DashboardChart;