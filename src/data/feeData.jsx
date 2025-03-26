// File: src/data/feeData.js

export const feeData = [
    {
      id: 1,
      rollNo: "19CS101",
      name: "Amit Kumar",
      department: "CSE",
      year: 3,
      feeAmount: 90000,
      paidAmount: 90000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 2,
      rollNo: "20EC112",
      name: "Priya Sharma",
      department: "ECE",
      year: 2,
      feeAmount: 90000,
      paidAmount: 45000,
      dueAmount: 45000,
      dueDate: "2024-04-30",
      status: "partial"
    },
    {
      id: 3,
      rollNo: "18ME105",
      name: "Rahul Singh",
      department: "Mechanical",
      year: 4,
      feeAmount: 85000,
      paidAmount: 85000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 4,
      rollNo: "21CV108",
      name: "Shreya Reddy",
      department: "Civil",
      year: 1,
      feeAmount: 80000,
      paidAmount: 0,
      dueAmount: 80000,
      dueDate: "2024-04-15",
      status: "unpaid"
    },
    {
      id: 5,
      rollNo: "20EE115",
      name: "Rajesh Kumar",
      department: "EEE",
      year: 2,
      feeAmount: 85000,
      paidAmount: 42500,
      dueAmount: 42500,
      dueDate: "2024-04-30",
      status: "partial"
    },
    {
      id: 6,
      rollNo: "19IT118",
      name: "Kavya Patel",
      department: "IT",
      year: 3,
      feeAmount: 90000,
      paidAmount: 90000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 7,
      rollNo: "18CS120",
      name: "Vikram Dutta",
      department: "CSE",
      year: 4,
      feeAmount: 90000,
      paidAmount: 45000,
      dueAmount: 45000,
      dueDate: "2024-04-30",
      status: "partial"
    }
  ];
  
  export const getDepartmentOptions = () => [
    { value: "", label: "All Departments" },
    { value: "CSE", label: "Computer Science (CSE)" },
    { value: "ECE", label: "Electronics & Communication (ECE)" },
    { value: "Mechanical", label: "Mechanical Engineering" },
    { value: "Civil", label: "Civil Engineering" },
    { value: "EEE", label: "Electrical & Electronics (EEE)" },
    { value: "IT", label: "Information Technology (IT)" }
  ];
  
  export const getYearOptions = () => [
    { value: "", label: "All Years" },
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" }
  ];
  
  export const getStatusOptions = () => [
    { value: "", label: "All Statuses" },
    { value: "paid", label: "Paid" },
    { value: "partial", label: "Partially Paid" },
    { value: "unpaid", label: "Unpaid" }
  ];
  
  export const getBadgeVariant = (status) => {
    switch (status) {
      case 'paid': return 'success';
      case 'partial': return 'warning';
      case 'unpaid': return 'danger';
      default: return 'secondary';
    }
  };
  
  export const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Paid';
      case 'partial': return 'Partially Paid';
      case 'unpaid': return 'Unpaid';
      default: return status;
    }
  };