// File: src/components/curriculum/modals/UploadSyllabusModal.js
import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

const UploadSyllabusModal = ({ show, onHide, departments }) => {
  const handleUploadSyllabus = (e) => {
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
        <Modal.Title>Upload Syllabus</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleUploadSyllabus}>
        <Modal.Body>
          <Row>
            <Col md={6}>
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
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Academic Year</Form.Label>
                <Form.Select required>
                  <option value="">Select Academic Year</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Syllabus Type</Form.Label>
            <Form.Select required>
              <option value="">Select Type</option>
              <option value="course">Course Syllabus</option>
              <option value="program">Program Curriculum</option>
              <option value="lab">Laboratory Manual</option>
              <option value="regulation">Regulation</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" accept=".pdf,.doc,.docx" required />
            <Form.Text className="text-muted">
              Upload syllabus document in PDF or Word format.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter a brief description" />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="Notify faculty members about the new syllabus" 
            />
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

export default UploadSyllabusModal;