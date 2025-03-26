// File: src/components/curriculum/CourseSelector.js
import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaDownload, FaFilePdf, FaSearch } from 'react-icons/fa';

const CourseSelector = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedYear,
  setSelectedYear,
  selectedSemester,
  setSelectedSemester,
  departments,
  years,
  semesters
}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h5 className="mb-3">Course Selector</h5>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>{dept.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year.value} value={year.value}>{year.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Semester</Form.Label>
              <Form.Select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                <option value="">All Semesters</option>
                {semesters.map(semester => (
                  <option key={semester.value} value={semester.value}>{semester.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-between align-items-center">
          <Form.Group className="mb-0 w-25">
            <div className="input-group">
              <Form.Control 
                type="text" 
                placeholder="Search courses"
              />
              <Button variant="outline-secondary" className="me-2">
                <FaDownload className="me-1" /> Export
              </Button>
              <Button variant="outline-primary">
                <FaFilePdf className="me-1" /> Download Syllabus
              </Button>
            </div>
          </Form.Group>
        </div>
      </Card.Body>
    </Card>
    
  );
};

export default CourseSelector;