// File: src/pages/Curriculum.js
import React, { useState } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import { FaUpload, FaPlus, FaEdit, FaSearch, FaListAlt, FaClipboardCheck, FaClock } from 'react-icons/fa';

// Import components
import CoursesTab from '../components/curriculum/CoursesTab';
import ProgramStructureTab from '../components/curriculum/ProgramStructureTab';
import RegulationsTab from '../components/curriculum/RegulationsTab';
import AcademicCalendarTab from '../components/curriculum/AcademicCalenderTab';
import AddCourseModal from '../components/curriculum/modals/AddCourseModal';
import UploadSyllabusModal from '../components/curriculum/modals/UploadSyllabusModal';
import ViewCourseModal from '../components/curriculum/modals/ViewCourseModal';

// Import data
import { 
  coursesData, 
  departments, 
  years, 
  semesters 
} from '../data/curriculumData';

const Curriculum = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState('courses');
  
  // Filter state
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedYear, setSelectedYear] = useState('3');
  const [selectedSemester, setSelectedSemester] = useState('odd');
  
  // Modal state
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showViewCourseModal, setShowViewCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  // Filter courses based on selected filters
  const filteredCourses = coursesData.filter(course => (
    course.department === selectedDepartment &&
    course.year === parseInt(selectedYear) &&
    course.semester === selectedSemester
  ));
  
  // Handle view course
  const handleViewCourse = (course) => {
    setSelectedCourse(course);
    setShowViewCourseModal(true);
  };
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Curriculum</h2>
        <div>
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload className="me-1" /> Upload Syllabus
          </Button>
          <Button 
            variant="primary"
            onClick={() => setShowAddCourseModal(true)}
          >
            <FaPlus className="me-1" /> Add Course
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
          <Nav.Link eventKey="courses">
            <FaSearch className="me-1" /> Courses
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="program">
            <FaListAlt className="me-1" /> Program Structure
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="regulations">
            <FaClipboardCheck className="me-1" /> Regulations
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="calendar">
            <FaClock className="me-1" /> Academic Calendar
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* Tab Content */}
      {activeTab === 'courses' && (
        <CoursesTab 
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
          filteredCourses={filteredCourses}
          handleViewCourse={handleViewCourse}
          departments={departments}
          years={years}
          semesters={semesters}
        />
      )}
      
      {activeTab === 'program' && (
        <ProgramStructureTab />
      )}
      
      {activeTab === 'regulations' && (
        <RegulationsTab />
      )}
      
      {activeTab === 'calendar' && (
        <AcademicCalendarTab />
      )}
      
      {/* Modals */}
      <AddCourseModal 
        show={showAddCourseModal} 
        onHide={() => setShowAddCourseModal(false)}
        departments={departments}
        years={years}
        semesters={semesters}
      />
      
      <UploadSyllabusModal 
        show={showUploadModal} 
        onHide={() => setShowUploadModal(false)}
        departments={departments}
      />
      
      <ViewCourseModal 
        show={showViewCourseModal} 
        onHide={() => setShowViewCourseModal(false)}
        course={selectedCourse}
      />
    </Container>
  );
};

export default Curriculum;