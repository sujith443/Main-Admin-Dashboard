// File: src/data/studentData.js

// Sample student data
export const students = [
    {
      id: 1,
      rollNo: "19CS101",
      name: "Amit Kumar",
      department: "CSE",
      year: 3,
      email: "amit.kumar@student.svit.edu.in",
      phone: "9876543210",
      status: "active",
      avatar: "AK"
    },
    {
      id: 2,
      rollNo: "20EC112",
      name: "Priya Sharma",
      department: "ECE",
      year: 2,
      email: "priya.sharma@student.svit.edu.in",
      phone: "9876543211",
      status: "active",
      avatar: "PS"
    },
    {
      id: 3,
      rollNo: "18ME105",
      name: "Rahul Singh",
      department: "Mechanical",
      year: 4,
      email: "rahul.singh@student.svit.edu.in",
      phone: "9876543212",
      status: "active",
      avatar: "RS"
    },
    {
      id: 4,
      rollNo: "21CV108",
      name: "Shreya Reddy",
      department: "Civil",
      year: 1,
      email: "shreya.reddy@student.svit.edu.in",
      phone: "9876543213",
      status: "active",
      avatar: "SR"
    },
    {
      id: 5,
      rollNo: "20EE115",
      name: "Rajesh Kumar",
      department: "EEE",
      year: 2,
      email: "rajesh.kumar@student.svit.edu.in",
      phone: "9876543214",
      status: "inactive",
      avatar: "RK"
    },
    {
      id: 6,
      rollNo: "19IT118",
      name: "Kavya Patel",
      department: "IT",
      year: 3,
      email: "kavya.patel@student.svit.edu.in",
      phone: "9876543215",
      status: "active",
      avatar: "KP"
    },
    {
      id: 7,
      rollNo: "18CS120",
      name: "Vikram Dutta",
      department: "CSE",
      year: 4,
      email: "vikram.dutta@student.svit.edu.in",
      phone: "9876543216",
      status: "active",
      avatar: "VD"
    }
  ];
  
  // Student departments
  export const departments = [
    { value: 'CSE', label: 'Computer Science (CSE)' },
    { value: 'ECE', label: 'Electronics & Communication (ECE)' },
    { value: 'Mechanical', label: 'Mechanical Engineering' },
    { value: 'Civil', label: 'Civil Engineering' },
    { value: 'EEE', label: 'Electrical & Electronics (EEE)' },
    { value: 'IT', label: 'Information Technology (IT)' }
  ];
  
  // Student years
  export const years = [
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' }
  ];
  
  // Student statuses
  export const statuses = [
    { value: 'active', label: 'Active', variant: 'success' },
    { value: 'inactive', label: 'Inactive', variant: 'danger' }
  ];
  
  // Student details for detailed view
  export const studentDetails = {
    personal: {
      dateOfBirth: "15-05-2001",
      gender: "Male",
      bloodGroup: "O+",
      category: "General",
      address: "123, Main Street, Vijayawada",
      district: "Krishna",
      state: "Andhra Pradesh",
      pinCode: "520001"
    },
    academic: {
      semesters: [
        { semester: 1, cgpa: 8.2, standing: "Good", backlogs: 0 },
        { semester: 2, cgpa: 8.5, standing: "Good", backlogs: 0 },
        { semester: 3, cgpa: 8.7, standing: "Very Good", backlogs: 0 },
        { semester: 4, cgpa: 9.1, standing: "Excellent", backlogs: 0 }
      ],
      achievements: [
        "Won first prize in national coding competition",
        "Member of college technical club",
        "Completed IBM certified cloud computing course"
      ]
    },
    fee: {
      payments: [
        { date: "15-07-2023", amount: 45000, mode: "Online", status: "Paid", transactionId: "TXN12345678" },
        { date: "20-01-2023", amount: 45000, mode: "Cheque", status: "Paid", transactionId: "CHQ98765432" },
        { date: "10-07-2022", amount: 42000, mode: "Online", status: "Paid", transactionId: "TXN87654321" }
      ],
      summary: {
        totalFee: 90000,
        amountPaid: 90000,
        dueAmount: 0,
        scholarshipAmount: 15000,
        nextDueDate: "15-07-2024"
      }
    },
    attendance: {
      subjects: [
        { name: "Database Systems", present: 38, total: 42, percentage: 90.5, status: "Good" },
        { name: "Operating Systems", present: 36, total: 40, percentage: 90.0, status: "Good" },
        { name: "Computer Networks", present: 32, total: 38, percentage: 84.2, status: "Satisfactory" },
        { name: "Software Engineering", present: 35, total: 40, percentage: 87.5, status: "Satisfactory" },
        { name: "Data Structures", present: 39, total: 42, percentage: 92.8, status: "Good" }
      ]
    }
  };