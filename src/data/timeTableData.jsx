// File: src/data/timetableData.js

// Available departments
export const departments = [
    { value: 'CSE', label: 'Computer Science (CSE)' },
    { value: 'ECE', label: 'Electronics & Communication (ECE)' },
    { value: 'Mechanical', label: 'Mechanical Engineering' },
    { value: 'Civil', label: 'Civil Engineering' },
    { value: 'EEE', label: 'Electrical & Electronics (EEE)' },
    { value: 'IT', label: 'Information Technology (IT)' }
  ];
  
  // Available years
  export const years = [
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' }
  ];
  
  // Available sections
  export const sections = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
  ];
  
  // Available semesters
  export const semesters = [
    { value: 'odd', label: 'Odd Semester' },
    { value: 'even', label: 'Even Semester' }
  ];
  
  // Sample timetable data - this represents a single timetable
  export const timetableData = [
    {
      day: 'Monday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Database Systems', faculty: 'Dr. S. Kumar', room: 'CS-301' },
        { time: '10:00 - 11:00', subject: 'Operating Systems', faculty: 'Prof. R. Reddy', room: 'CS-302' },
        { time: '11:15 - 12:15', subject: 'Computer Networks', faculty: 'Dr. P. Sharma', room: 'CS-303' },
        { time: '12:15 - 1:15', subject: 'Lunch Break', faculty: '', room: '' },
        { time: '1:15 - 2:15', subject: 'Web Technologies', faculty: 'Mr. A. Singh', room: 'CS-Lab-2' },
        { time: '2:15 - 3:15', subject: 'Web Technologies (Lab)', faculty: 'Mr. A. Singh', room: 'CS-Lab-2' },
        { time: '3:30 - 4:30', subject: 'Web Technologies (Lab)', faculty: 'Mr. A. Singh', room: 'CS-Lab-2' }
      ]
    },
    {
      day: 'Tuesday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Operating Systems', faculty: 'Prof. R. Reddy', room: 'CS-302' },
        { time: '10:00 - 11:00', subject: 'Machine Learning', faculty: 'Dr. L. Patel', room: 'CS-304' },
        { time: '11:15 - 12:15', subject: 'Database Systems', faculty: 'Dr. S. Kumar', room: 'CS-301' },
        { time: '12:15 - 1:15', subject: 'Lunch Break', faculty: '', room: '' },
        { time: '1:15 - 2:15', subject: 'Computer Networks', faculty: 'Dr. P. Sharma', room: 'CS-303' },
        { time: '2:15 - 3:15', subject: 'Machine Learning Lab', faculty: 'Dr. L. Patel', room: 'AI-Lab' },
        { time: '3:30 - 4:30', subject: 'Machine Learning Lab', faculty: 'Dr. L. Patel', room: 'AI-Lab' }
      ]
    },
    {
      day: 'Wednesday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Computer Networks', faculty: 'Dr. P. Sharma', room: 'CS-303' },
        { time: '10:00 - 11:00', subject: 'Database Systems', faculty: 'Dr. S. Kumar', room: 'CS-301' },
        { time: '11:15 - 12:15', subject: 'Software Engineering', faculty: 'Prof. M. Khanna', room: 'CS-305' },
        { time: '12:15 - 1:15', subject: 'Lunch Break', faculty: '', room: '' },
        { time: '1:15 - 2:15', subject: 'Web Technologies', faculty: 'Mr. A. Singh', room: 'CS-Lab-2' },
        { time: '2:15 - 3:15', subject: 'Database Lab', faculty: 'Dr. S. Kumar', room: 'DB-Lab' },
        { time: '3:30 - 4:30', subject: 'Database Lab', faculty: 'Dr. S. Kumar', room: 'DB-Lab' }
      ]
    },
    {
      day: 'Thursday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Software Engineering', faculty: 'Prof. M. Khanna', room: 'CS-305' },
        { time: '10:00 - 11:00', subject: 'Operating Systems', faculty: 'Prof. R. Reddy', room: 'CS-302' },
        { time: '11:15 - 12:15', subject: 'Machine Learning', faculty: 'Dr. L. Patel', room: 'CS-304' },
        { time: '12:15 - 1:15', subject: 'Lunch Break', faculty: '', room: '' },
        { time: '1:15 - 2:15', subject: 'Operating Systems Lab', faculty: 'Prof. R. Reddy', room: 'OS-Lab' },
        { time: '2:15 - 3:15', subject: 'Operating Systems Lab', faculty: 'Prof. R. Reddy', room: 'OS-Lab' },
        { time: '3:30 - 4:30', subject: 'Mentoring Session', faculty: 'Respective Mentors', room: 'Assigned Rooms' }
      ]
    },
    {
      day: 'Friday',
      periods: [
        { time: '9:00 - 10:00', subject: 'Machine Learning', faculty: 'Dr. L. Patel', room: 'CS-304' },
        { time: '10:00 - 11:00', subject: 'Software Engineering', faculty: 'Prof. M. Khanna', room: 'CS-305' },
        { time: '11:15 - 12:15', subject: 'Web Technologies', faculty: 'Mr. A. Singh', room: 'CS-Lab-2' },
        { time: '12:15 - 1:15', subject: 'Lunch Break', faculty: '', room: '' },
        { time: '1:15 - 2:15', subject: 'Computer Networks Lab', faculty: 'Dr. P. Sharma', room: 'Networks-Lab' },
        { time: '2:15 - 3:15', subject: 'Computer Networks Lab', faculty: 'Dr. P. Sharma', room: 'Networks-Lab' },
        { time: '3:30 - 4:30', subject: 'Library/Self Study', faculty: '', room: 'Library' }
      ]
    }
  ];
  
  // Available timetables - this is a list of timetables that can be selected
  export const availableTimetables = [
    { id: 1, department: 'CSE', year: '3', semester: 'odd', updatedAt: '2024-03-10', updatedBy: 'Admin' },
    { id: 2, department: 'CSE', year: '2', semester: 'odd', updatedAt: '2024-03-09', updatedBy: 'Admin' },
    { id: 3, department: 'ECE', year: '3', semester: 'odd', updatedAt: '2024-03-08', updatedBy: 'Admin' },
    { id: 4, department: 'ECE', year: '4', semester: 'odd', updatedAt: '2024-03-07', updatedBy: 'Admin' },
    { id: 5, department: 'Mechanical', year: '2', semester: 'odd', updatedAt: '2024-03-06', updatedBy: 'Admin' },
    { id: 6, department: 'EEE', year: '1', semester: 'odd', updatedAt: '2024-03-05', updatedBy: 'Admin' },
  ];
  
  // Template types
  export const templateTypes = [
    { 
      id: 1, 
      title: 'Standard Timetable', 
      description: 'Basic template with 7 periods per day',
      icon: 'FaFilePdf',
      type: 'pdf'
    },
    { 
      id: 2, 
      title: 'Lab Session Template', 
      description: 'Template optimized for practical lab sessions',
      icon: 'FaFileExcel',
      type: 'excel'
    },
    { 
      id: 3, 
      title: 'Exam Timetable', 
      description: 'Template for exam schedules and seating',
      icon: 'FaFileImage',
      type: 'image'
    }
  ];