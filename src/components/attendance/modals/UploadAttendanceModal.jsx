// File: src/components/attendance/modals/UploadAttendanceModal.js
import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFileCsv } from 'react-icons/fa';

const UploadAttendanceModal = ({ show, onHide, subjects }) => {
  const handleUploadAttendance = (e) => {
    e.preventDefault();
    // In a real app, this would upload the file to an API
    onHide();
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Upload Attendance</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleUploadAttendance}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select required>
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Select required>
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Section</Form.Label>
                <Form.Select required>
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select required>
                  <option value="">Select Subject</option>
                  {subjects && subjects.map(subject => (
                    <option key={subject.code} value={subject.code}>
                      {subject.code}: {subject.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Date Range</Form.Label>
            <Row>
              <Col md={6}>
                <Form.Control type="date" placeholder="Start Date" />
              </Col>
              <Col md={6}>
                <Form.Control type="date" placeholder="End Date" />
              </Col>
            </Row>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" required />
            <Form.Text className="text-muted">
              Upload attendance data in CSV or Excel format.
            </Form.Text>
          </Form.Group>
          
          <div className="bg-light p-3 rounded mb-3">
            <h6 className="mb-2">File Format Requirements:</h6>
            <p className="small mb-2">
              The file should contain the following columns:
            </p>
            <p className="small mb-0">
              <strong>Roll Number, Name, Date, Period, Status (Present/Absent)</strong>
            </p>
          </div>
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="First row contains column headers" 
              defaultChecked 
            />
          </Form.Group>
          
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary" size="sm" className="me-2">
              <FaFileCsv className="me-1" /> Download Template
            </Button>
            <p className="text-muted small mb-0">
              Not sure about the format? Download our template file.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UploadAttendanceModal;