// File: src/components/attendance/ReportGenerator.js
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const ReportGenerator = ({ subjects }) => {
  return (
    <>
      <Row>
        <Col md={3}>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select>
              <option value="">All Departments</option>
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
            <Form.Select>
              <option value="">All Years</option>
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
            <Form.Select>
              <option value="">All Sections</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Select>
              <option value="">All Subjects</option>
              {subjects && subjects.map(subject => (
                <option key={subject.code} value={subject.code}>
                  {subject.code}: {subject.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group className="mb-3">
            <Form.Label>Date Range</Form.Label>
            <Form.Select>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="thisMonth">This Month</option>
              <option value="custom">Custom Range</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Student (Optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter roll number or name" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Report Type</Form.Label>
            <Form.Select>
              <option value="detailed">Detailed Report</option>
              <option value="summary">Summary Report</option>
              <option value="consolidated">Consolidated Report</option>
              <option value="shortage">Shortage Report</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Output Format</Form.Label>
            <Form.Select>
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <div className="d-flex justify-content-end">
        <Button variant="primary">
          <FaSearch className="me-1" /> Generate Report
        </Button>
      </div>
    </>
  );
};

export default ReportGenerator;