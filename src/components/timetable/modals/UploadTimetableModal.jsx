// File: src/components/timetable/modals/UploadTimetableModal.js
import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const UploadTimetableModal = ({ 
  show, 
  onHide,
  departments,
  years,
  sections,
  semesters
}) => {
  const handleUploadTimetable = (e) => {
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
        <Modal.Title>Upload Timetable</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleUploadTimetable}>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select required>
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>{dept.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Select required>
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year.value} value={year.value}>{year.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Semester</Form.Label>
                <Form.Select required>
                  <option value="">Select Semester</option>
                  {semesters.map(semester => (
                    <option key={semester.value} value={semester.value}>{semester.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
            
          <Form.Group className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" required />
            <Form.Text className="text-muted">
              Upload timetable in Excel, PDF, or image format.
            </Form.Text>
          </Form.Group>
            
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="Notify students and faculty about the new timetable" 
            />
          </Form.Group>
            
          <Form.Group className="mb-3">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter any additional notes" />
          </Form.Group>
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

export default UploadTimetableModal;