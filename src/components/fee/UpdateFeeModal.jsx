// File: src/components/fee/UpdateFeeModal.jsx
import React from 'react';
import { Modal, Form, Row, Col, Button, InputGroup, Tabs, Tab } from 'react-bootstrap';

const UpdateFeeModal = ({ show, onHide, onSubmit }) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Update Fee Details</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Academic Year</Form.Label>
                <Form.Select required>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Semester</Form.Label>
                <Form.Select required>
                  <option value="odd">Odd Semester</option>
                  <option value="even">Even Semester</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
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
          
          <Tabs defaultActiveKey="tuition" id="fee-tabs" className="mb-3">
            <Tab eventKey="tuition" title="Tuition Fee">
              <Form.Group className="mb-3">
                <Form.Label>Tuition Fee Amount (₹)</Form.Label>
                <InputGroup>
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Control type="number" placeholder="Enter amount" defaultValue="1000" />
                </InputGroup>
              </Form.Group>
            </Tab>
            <Tab eventKey="hostel" title="Hostel Fee">
              <Form.Group className="mb-3">
                <Form.Label>Hostel Fee Amount (₹)</Form.Label>
                <InputGroup>
                  <InputGroup.Text>₹</InputGroup.Text>
                  <Form.Control type="number" placeholder="Enter amount" defaultValue="5000" />
                </InputGroup>
              </Form.Group>
            </Tab>  
            </Tabs>
          
          
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="Notify students about the fee update" 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Update Fee Details
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateFeeModal;