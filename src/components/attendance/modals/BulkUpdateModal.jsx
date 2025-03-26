// File: src/components/attendance/modals/BulkUpdateModal.js
import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const BulkUpdateModal = ({ show, onHide, classSelectionProps }) => {
  const {
    selectedDepartment,
    selectedYear,
    selectedSection,
    selectedSubject,
    subjects
  } = classSelectionProps;

  const handleBulkUpdate = (e) => {
    e.preventDefault();
    // In a real app, this would update multiple students' attendance via an API
    onHide();
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Bulk Update Attendance</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleBulkUpdate}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select required defaultValue={selectedDepartment}>
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
                <Form.Select required defaultValue={selectedYear}>
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
                <Form.Select required defaultValue={selectedSection}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Select required defaultValue={selectedSubject}>
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
                <Form.Control type="date" required />
              </Col>
              <Col md={6}>
                <Form.Control type="date" required />
              </Col>
            </Row>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Action</Form.Label>
            <div>
              <Form.Check 
                type="radio" 
                name="bulkAction"
                id="markPresent"
                label="Mark all students present" 
                className="mb-2"
                defaultChecked
              />
              <Form.Check 
                type="radio" 
                name="bulkAction"
                id="markAbsent"
                label="Mark all students absent" 
                className="mb-2"
              />
              <Form.Check 
                type="radio" 
                name="bulkAction"
                id="markHoliday"
                label="Mark as holiday" 
              />
            </div>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Reason</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter reason for bulk update" />
            <Form.Text className="text-muted">
              This will be recorded in the attendance log.
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update Attendance
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default BulkUpdateModal;