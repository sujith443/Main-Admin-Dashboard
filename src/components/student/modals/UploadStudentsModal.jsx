// File: src/components/student/modals/UploadStudentsModal.js
import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaFileCsv } from 'react-icons/fa';

const UploadStudentsModal = ({ show, onHide }) => {
  const handleUploadFile = (e) => {
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
        <Modal.Title>Upload Student Data</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleUploadFile}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Select File</Form.Label>
            <Form.Control type="file" required />
            <Form.Text className="text-muted">
              Upload CSV or Excel file containing student data.
            </Form.Text>
          </Form.Group>
          
          <div className="bg-light p-3 rounded mb-3">
            <h6 className="mb-2">File Format Requirements:</h6>
            <p className="small mb-2">
              The file should contain the following columns in order:
            </p>
            <p className="small mb-0">
              <strong>Roll Number, Name, Department, Year, Email, Phone, Status</strong>
            </p>
          </div>
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="First row contains column headers" 
              defaultChecked 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="Update existing records if Roll Number already exists" 
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

export default UploadStudentsModal;