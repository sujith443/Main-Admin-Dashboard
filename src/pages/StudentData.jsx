// File: src/pages/StudentData.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaPlus, FaUpload } from 'react-icons/fa';

// Import components
import StudentFilters from '../components/student/StudentFilters';
import StudentList from '../components/student/StudentList';
import AddStudentModal from '../components/student/modals/AddStudentModal';
import UploadStudentsModal from '../components/student/modals/UploadStudentsModal';
import ViewStudentModal from '../components/student/modals/ViewStudentModal';

// Import sample data
import { students, departments, years } from '../data/studentData';

const StudentData = () => {
  // State hooks
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter students based on filters and search term
  const filteredStudents = students.filter(student => {
    return (
      (filterDepartment === '' || student.department === filterDepartment) &&
      (filterYear === '' || student.year === parseInt(filterYear)) &&
      (filterStatus === '' || student.status === filterStatus) &&
      (searchTerm === '' || 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  // Handle view student details
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Student Data</h2>
        <div>
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload className="me-1" /> Upload Data
          </Button>
          <Button 
            variant="primary"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus className="me-1" /> Add Student
          </Button>
        </div>
      </div>
      
      {/* Filters */}
      <StudentFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        departments={departments}
        years={years}
      />
      
      {/* Student List */}
      <StudentList 
        students={filteredStudents}
        totalStudents={students.length}
        handleViewStudent={handleViewStudent}
      />
      
      {/* Modals */}
      <AddStudentModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        departments={departments}
        years={years}
      />
      
      <UploadStudentsModal
        show={showUploadModal}
        onHide={() => setShowUploadModal(false)}
      />
      
      <ViewStudentModal
        show={showStudentModal}
        onHide={() => setShowStudentModal(false)}
        student={selectedStudent}
      />
    </Container>
  );
};

export default StudentData;