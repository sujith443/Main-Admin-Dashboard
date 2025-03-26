// File: src/components/curriculum/CoursesTab.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrashAlt, FaDownload, FaFilePdf } from 'react-icons/fa';

// Import components
import CourseSelector from './CourseSelector';
import CourseCard from './CourseCard';

const CoursesTab = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedYear,
  setSelectedYear,
  selectedSemester,
  setSelectedSemester,
  filteredCourses,
  handleViewCourse,
  departments,
  years,
  semesters
}) => {
  return (
    <>
      <CourseSelector 
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        departments={departments}
        years={years}
        semesters={semesters}
      />
      
      <Row>
        {filteredCourses.map((course) => (
          <Col key={course.id} lg={6} className="mb-4">
            <CourseCard 
              course={course} 
              handleViewCourse={handleViewCourse}
            />
          </Col>
        ))}
        
        {filteredCourses.length === 0 && (
          <Col lg={12}>
            <Card className="text-center p-5">
              <Card.Body>
                <p className="mb-0">No courses found for the selected criteria.</p>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
};

export default CoursesTab;