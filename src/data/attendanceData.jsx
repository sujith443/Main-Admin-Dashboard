// File: src/data/attendanceData.js

// Sample student data for attendance
export const sampleStudents = [
    { id: 1, rollNo: "19CS101", name: "Amit Kumar", present: true, avatar: "AK" },
    { id: 2, rollNo: "19CS102", name: "Priya Sharma", present: false, avatar: "PS" },
    { id: 3, rollNo: "19CS103", name: "Rahul Singh", present: true, avatar: "RS" },
    { id: 4, rollNo: "19CS104", name: "Shreya Reddy", present: true, avatar: "SR" },
    { id: 5, rollNo: "19CS105", name: "Vikram Dutta", present: true, avatar: "VD" },
    { id: 6, rollNo: "19CS106", name: "Kavya Patel", present: true, avatar: "KP" },
    { id: 7, rollNo: "19CS107", name: "Rajesh Kumar", present: false, avatar: "RK" },
    { id: 8, rollNo: "19CS108", name: "Ananya Desai", present: true, avatar: "AD" },
    { id: 9, rollNo: "19CS109", name: "Karthik Reddy", present: true, avatar: "KR" },
    { id: 10, rollNo: "19CS110", name: "Sneha Verma", present: false, avatar: "SV" },
    { id: 11, rollNo: "19CS111", name: "Arjun Mehta", present: true, avatar: "AM" },
    { id: 12, rollNo: "19CS112", name: "Tanvi Reddy", present: true, avatar: "TR" }
  ];
  
  // Sample subjects data
  export const subjects = [
    { code: "CS301", name: "Database Systems", faculty: "Dr. S. Kumar" },
    { code: "CS302", name: "Operating Systems", faculty: "Prof. R. Reddy" },
    { code: "CS303", name: "Computer Networks", faculty: "Dr. P. Sharma" },
    { code: "CS304", name: "Machine Learning", faculty: "Dr. L. Patel" },
    { code: "CS305", name: "Software Engineering", faculty: "Prof. M. Khanna" }
  ];
  
  // Sample periods for the day
  export const periods = [
    { id: "1", time: "9:00 - 10:00 AM" },
    { id: "2", time: "10:00 - 11:00 AM" },
    { id: "3", time: "11:15 - 12:15 PM" },
    { id: "4", time: "12:15 - 1:15 PM" },
    { id: "5", time: "1:15 - 2:15 PM" },
    { id: "6", time: "2:15 - 3:15 PM" },
    { id: "7", time: "3:30 - 4:30 PM" }
  ];
  
  // Sample data for attendance report
  export const attendanceReport = {
    student: { id: 1, rollNo: "19CS101", name: "Amit Kumar", department: "CSE", year: 3, section: "A" },
    subjects: [
      { code: "CS301", name: "Database Systems", present: 22, total: 24, percentage: 91.7 },
      { code: "CS302", name: "Operating Systems", present: 20, total: 24, percentage: 83.3 },
      { code: "CS303", name: "Computer Networks", present: 23, total: 24, percentage: 95.8 },
      { code: "CS304", name: "Machine Learning", present: 21, total: 24, percentage: 87.5 },
      { code: "CS305", name: "Software Engineering", present: 22, total: 24, percentage: 91.7 }
    ],
    overall: { present: 108, total: 120, percentage: 90.0 },
    monthly: [
      { month: "January", percentage: 92, status: "Regular" },
      { month: "February", percentage: 88, status: "Regular" },
      { month: "March", percentage: 90, status: "Regular" },
    ]
  };
  
  // Sample department-wise attendance data for bar chart
  export const barChartData = {
    labels: ['CSE', 'ECE', 'Mechanical', 'Civil', 'EEE', 'IT'],
    datasets: [
      {
        label: 'Attendance Percentage',
        data: [92, 87, 83, 89, 86, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  
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
  
  // Sample data for monthly attendance trend
  export const monthlyTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'CSE Department',
        data: [92, 90, 88, 93, 91, 94],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'College Average',
        data: [88, 86, 84, 89, 87, 90],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };
  
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
  
  // Sample shortage data
  export const shortageData = [
    {
      rollNo: "19CS105",
      name: "Vikram Dutta",
      department: "CSE",
      year: 3,
      overallPercentage: 66.7,
      status: "Critical"
    },
    {
      rollNo: "20EC108",
      name: "Ananya Desai",
      department: "ECE",
      year: 2,
      overallPercentage: 70.2,
      status: "Warning"
    },
    {
      rollNo: "21ME112",
      name: "Karthik Reddy",
      department: "Mechanical",
      year: 1,
      overallPercentage: 68.5,
      status: "Warning"
    },
    {
      rollNo: "19EE115",
      name: "Sneha Verma",
      department: "EEE",
      year: 3,
      overallPercentage: 62.3,
      status: "Critical"
    }
  ];
  
  // Sample recent attendance records
  export const recentAttendanceRecords = [
    {
      date: "2024-03-25",
      department: "CSE",
      yearSection: "3-A",
      subject: "CS301: Database Systems",
      period: "1 (9:00 - 10:00 AM)",
      presentTotal: "42/45",
      percentage: 93.3,
      markedBy: "Dr. S. Kumar"
    },
    {
      date: "2024-03-25",
      department: "CSE",
      yearSection: "3-A",
      subject: "CS302: Operating Systems",
      period: "2 (10:00 - 11:00 AM)",
      presentTotal: "40/45",
      percentage: 88.9,
      markedBy: "Prof. R. Reddy"
    },
    {
      date: "2024-03-25",
      department: "ECE",
      yearSection: "2-B",
      subject: "EC201: Electronic Circuits",
      period: "1 (9:00 - 10:00 AM)",
      presentTotal: "38/40",
      percentage: 95.0,
      markedBy: "Dr. A. Gupta"
    },
    {
      date: "2024-03-24",
      department: "CSE",
      yearSection: "3-A",
      subject: "CS303: Computer Networks",
      period: "3 (11:15 - 12:15 PM)",
      presentTotal: "41/45",
      percentage: 91.1,
      markedBy: "Dr. P. Sharma"
    },
    {
      date: "2024-03-24",
      department: "IT",
      yearSection: "4-A",
      subject: "IT401: Cloud Computing",
      period: "2 (10:00 - 11:00 AM)",
      presentTotal: "35/38",
      percentage: 92.1,
      markedBy: "Prof. K. Mehta"
    }
  ];