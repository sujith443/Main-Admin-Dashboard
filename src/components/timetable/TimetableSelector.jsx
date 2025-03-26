// File: src/components/timetable/TimetableSelector.js
import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaSearch, FaDownload, FaFilePdf } from 'react-icons/fa';

const TimetableSelector = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedYear,
  setSelectedYear,
  selectedSection,
  setSelectedSection,
  selectedSemester,
  setSelectedSemester,
  departments,
  years,
  sections,
  semesters,
  showViewModal
}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h5 className="mb-3">Timetable Selector</h5>
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
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button 
            variant="outline-secondary" 
            className="me-2"
          >
            <FaDownload className="me-1" /> Export
          </Button>
          <Button 
            variant="outline-primary" 
            className="me-2"
          >
            <FaFilePdf className="me-1" /> Download Syllabus
          </Button>
          <Button 
            variant="primary"
            onClick={showViewModal}
          >
            View Timetable
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TimetableSelector;