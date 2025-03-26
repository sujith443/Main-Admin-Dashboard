// File: src/utils/chartUtils.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';

// Register ChartJS components
export const registerCharts = () => {
  ChartJS.register(
    ArcElement, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    PointElement,
    LineElement,
    Title, 
    Tooltip, 
    Legend
  );
};

// Create attendance distribution pie chart data
export const createPieChartData = (presentCount, absentCount) => {
  return {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [presentCount, absentCount],
        backgroundColor: [
          'rgba(54, 179, 126, 0.7)',
          'rgba(255, 86, 48, 0.7)',
        ],
        borderColor: [
          'rgba(54, 179, 126, 1)',
          'rgba(255, 86, 48, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

// Create attendance by department bar chart data
export const createDepartmentBarChartData = (departments, percentages) => {
  return {
    labels: departments,
    datasets: [
      {
        label: 'Attendance Percentage',
        data: percentages,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
};

// Default options for bar chart
export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Department-wise Attendance',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 100,
      ticks: {
        callback: function(value) {
          return value + '%';
        }
      }
    }
  }
};

// Create monthly trend line chart data
export const createMonthlyTrendData = (months, departmentData, averageData) => {
  return {
    labels: months,
    datasets: [
      {
        label: 'Department Average',
        data: departmentData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'College Average',
        data: averageData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };
};

// Default options for line chart
export const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Attendance Trend',
    },
  },
  scales: {
    y: {
      min: 70,
      max: 100,
      ticks: {
        callback: function(value) {
          return value + '%';
        }
      }
    }
  }
};

// Create student monthly trend line chart data
export const createStudentMonthlyTrendData = (months, percentages) => {
  return {
    labels: months,
    datasets: [{
      label: 'Attendance %',
      data: percentages,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      fill: true,
    }]
  };
};

// Default options for student trend line chart
export const studentLineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 70,
      max: 100,
      ticks: {
        callback: function(value) {
          return value + '%';
        }
      }
    }
  }
};