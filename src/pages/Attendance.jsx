// File: src/pages/Attendance.js
import React, { useState } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import { 
  FaUpload, 
  FaDownload, 
  FaEdit, 
  FaSearch, 
  FaChartBar, 
  FaBell 
} from 'react-icons/fa';

// Import components
import MarkAttendance from '../components/attendance/MarkAttendance';
import ViewAttendance from '../components/attendance/ViewAttendance';
import AttendanceAnalytics from '../components/attendance/AttendanceAnalytics';
import ShortageAlerts from '../components/attendance/ShortageAlerts';
import UploadAttendanceModal from '../components/attendance/modals/UploadAttendanceModal';
import BulkUpdateModal from '../components/attendance/modals/BulkUpdateModal';
import StudentReportModal from '../components/attendance/modals/StudentReportModal';

// Import data and chart utilities
import { 
  sampleStudents, 
  subjects, 
  periods,
  attendanceReport 
} from '../data/attendanceData';

const Attendance = () => {
  const [activeTab, setActiveTab] = useState('mark');
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedYear, setSelectedYear] = useState('3');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedSubject, setSelectedSubject] = useState('CS301');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedPeriod, setSelectedPeriod] = useState('1');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showBulkUpdateModal, setShowBulkUpdateModal] = useState(false);
  const [showAttendanceReportModal, setShowAttendanceReportModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState(sampleStudents);
  
  // Filter students based on search term
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate attendance statistics
  const attendanceStats = {
    presentCount: students.filter(student => student.present).length,
    absentCount: students.filter(student => !student.present).length,
    totalCount: students.length
  };

  // Handle toggle attendance status
  const toggleAttendance = (studentId) => {
    setStudents(prevStudents => 
      prevStudents.map(student => {
        if (student.id === studentId) {
          return { ...student, present: !student.present };
        }
        return student;
      })
    );
  };
  
  // Handle mark all students present
  const markAllPresent = () => {
    setStudents(prevStudents => 
      prevStudents.map(student => ({ ...student, present: true }))
    );
  };
  
  // Handle mark all students absent
  const markAllAbsent = () => {
    setStudents(prevStudents => 
      prevStudents.map(student => ({ ...student, present: false }))
    );
  };
  
  // Handle save attendance
  const saveAttendance = () => {
    // In a real app, this would save the attendance data to the backend
    alert("Attendance has been saved successfully!");
  };

  // Class selection props for passing to components
  const classSelectionProps = {
    selectedDepartment,
    setSelectedDepartment,
    selectedYear,
    setSelectedYear,
    selectedSection,
    setSelectedSection,
    selectedSubject,
    setSelectedSubject,
    selectedDate,
    setSelectedDate,
    selectedPeriod,
    setSelectedPeriod,
    subjects,
    periods
  };

  // Student list props for passing to components
  const studentListProps = {
    students: filteredStudents,
    searchTerm,
    setSearchTerm,
    toggleAttendance,
    markAllPresent,
    markAllAbsent,
    saveAttendance,
    attendanceStats,
    setShowAttendanceReportModal
  };
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Attendance Management</h2>
        <div>
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload className="me-1" /> Upload Attendance
          </Button>
          <Button 
            variant="outline-success" 
            className="me-2"
            onClick={() => setShowBulkUpdateModal(true)}
          >
            <FaEdit className="me-1" /> Bulk Update
          </Button>
          <Button variant="primary">
            <FaDownload className="me-1" /> Download Report
          </Button>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <Nav 
        variant="tabs" 
        className="mb-4"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
      >
        <Nav.Item>
          <Nav.Link eventKey="mark">
            <FaEdit className="me-1" /> Mark Attendance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="view">
            <FaSearch className="me-1" /> View & Reports
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="analytics">
            <FaChartBar className="me-1" /> Analytics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="shortage">
            <FaBell className="me-1" /> Shortage Alerts
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* Tab Content */}
      {activeTab === 'mark' && (
        <MarkAttendance 
          classSelectionProps={classSelectionProps}
          studentListProps={studentListProps}
        />
      )}
      
      {activeTab === 'view' && (
        <ViewAttendance 
          setShowAttendanceReportModal={setShowAttendanceReportModal}
          subjects={subjects}
        />
      )}
      
      {activeTab === 'analytics' && (
        <AttendanceAnalytics />
      )}
      
      {activeTab === 'shortage' && (
        <ShortageAlerts 
          setShowAttendanceReportModal={setShowAttendanceReportModal}
        />
      )}
      
      {/* Modals */}
      <UploadAttendanceModal 
        show={showUploadModal} 
        onHide={() => setShowUploadModal(false)}
        subjects={subjects}
      />
      
      <BulkUpdateModal 
        show={showBulkUpdateModal} 
        onHide={() => setShowBulkUpdateModal(false)}
        classSelectionProps={classSelectionProps}
      />
      
      <StudentReportModal 
        show={showAttendanceReportModal} 
        onHide={() => setShowAttendanceReportModal(false)}
        attendanceReport={attendanceReport}
      />
    </Container>
  );
};

export default Attendance;