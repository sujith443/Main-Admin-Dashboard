// File: src/services/attendanceService.js

// This file would contain API calls to the backend in a real application
// For now, it simulates API calls with mock data and timeouts

/**
 * Get students by class (department, year, section)
 */
export const getStudentsByClass = async (department, year, section) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
        ]);
      }, 500);
    });
  };
  
  /**
   * Get subjects by department and year
   */
  export const getSubjectsByDepartmentAndYear = async (department, year) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { code: "CS301", name: "Database Systems", faculty: "Dr. S. Kumar" },
          { code: "CS302", name: "Operating Systems", faculty: "Prof. R. Reddy" },
          { code: "CS303", name: "Computer Networks", faculty: "Dr. P. Sharma" },
          { code: "CS304", name: "Machine Learning", faculty: "Dr. L. Patel" },
          { code: "CS305", name: "Software Engineering", faculty: "Prof. M. Khanna" }
        ]);
      }, 300);
    });
  };
  
  /**
   * Save attendance data
   */
  export const saveAttendance = async (attendanceData) => {
    // In a real app, this would be an API call to save attendance
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Attendance data saved:', attendanceData);
        resolve({ success: true, message: 'Attendance saved successfully' });
      }, 800);
    });
  };
  
  /**
   * Get student attendance report
   */
  export const getStudentAttendanceReport = async (studentId) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
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
        });
      }, 700);
    });
  };
  
  /**
   * Get attendance analytics data
   */
  export const getAttendanceAnalytics = async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          departmentWise: {
            labels: ['CSE', 'ECE', 'Mechanical', 'Civil', 'EEE', 'IT'],
            data: [92, 87, 83, 89, 86, 90],
          },
          monthlyTrend: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            departmentData: [92, 90, 88, 93, 91, 94],
            collegeData: [88, 86, 84, 89, 87, 90],
          },
          summary: {
            totalStudents: 1250,
            averageAttendance: 88.2,
            belowThreshold: 86,
            workingDays: 22
          }
        });
      }, 1000);
    });
  };
  
  /**
   * Get attendance shortage report
   */
  export const getAttendanceShortageReport = async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
        ]);
      }, 600);
    });
  };
  
  /**
   * Upload attendance data file
   */
  export const uploadAttendanceFile = async (formData) => {
    // In a real app, this would be an API call to upload file
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data received:', formData);
        resolve({ success: true, message: 'File uploaded successfully' });
      }, 1500);
    });
  };
  
  /**
   * Send attendance alerts to students with shortage
   */
  export const sendAttendanceAlerts = async (studentIds) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Sending alerts to students:', studentIds);
        resolve({ success: true, message: 'Alerts sent successfully to ' + studentIds.length + ' students' });
      }, 1200);
    });
  };
  
  /**
   * Get recent attendance records
   */
  export const getRecentAttendanceRecords = async (limit = 5, offset = 0) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          records: [
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
              yearSection: "2-B",}
            ]
            })
        })
    })
}
