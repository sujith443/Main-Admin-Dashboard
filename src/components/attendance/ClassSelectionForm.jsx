// File: src/components/attendance/ClassSelectionForm.js
import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const ClassSelectionForm = ({ 
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
}) => {
  return (
    <Row>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="CSE">Computer Science (CSE)</option>
            <option value="ECE">Electronics & Communication (ECE)</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Civil">Civil Engineering</option>
            <option value="EEE">Electrical & Electronics (EEE)</option>
            <option value="IT">Information Technology (IT)</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Section</Form.Label>
          <Form.Select 
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Select 
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects && subjects.map(subject => (
              <option key={subject.code} value={subject.code}>
                {subject.code}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col md={2}>
        <Form.Group className="mb-3">
          <Form.Label>Period</Form.Label>
          <Form.Select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods && periods.map(period => (
              <option key={period.id} value={period.id}>
                {period.id} ({period.time})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default ClassSelectionForm;