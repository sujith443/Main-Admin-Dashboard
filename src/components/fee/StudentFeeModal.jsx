// File: src/components/fee/StudentFeeModal.jsx
import React from 'react';
import { Modal, Row, Col, Badge, Button, Alert, Tabs, Tab, Table, Form, InputGroup } from 'react-bootstrap';
import { FaExclamationTriangle, FaCheck, FaDownload, FaEnvelope } from 'react-icons/fa';
import { getBadgeVariant, getStatusText } from '../../data/feeData';

const StudentFeeModal = ({ show, onHide, student }) => {
  if (!student) return null;
  
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Student Fee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <Row>
            <Col md={6}>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Roll No:</strong> {student.rollNo}</p>
              <p><strong>Department:</strong> {student.department}</p>
              <p><strong>Year:</strong> {student.year}</p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Status:</strong> {' '}
                <Badge bg={getBadgeVariant(student.status)}>
                  {getStatusText(student.status)}
                </Badge>
              </p>
              <p><strong>Total Fee:</strong> ₹{student.feeAmount.toLocaleString()}</p>
              <p><strong>Paid Amount:</strong> ₹{student.paidAmount.toLocaleString()}</p>
              <p>
                <strong>Due Amount:</strong> {' '}
                <span className={student.dueAmount > 0 ? 'text-danger' : ''}>
                  ₹{student.dueAmount.toLocaleString()}
                </span>
              </p>
            </Col>
          </Row>
          
          {student.dueAmount > 0 && (
            <Alert variant="warning" className="d-flex align-items-center">
              <FaExclamationTriangle className="me-2" size={20} />
              <div>
                <strong>Payment Due!</strong> Next payment due date: {student.dueDate}
              </div>
            </Alert>
          )}
        </div>
        
        <Tabs defaultActiveKey="history" id="student-fee-tabs" className="mb-3">
          <Tab eventKey="history" title="Payment History">
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Receipt No</th>
                  <th>Amount</th>
                  <th>Mode</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {student.paidAmount > 0 ? (
                  <>
                    <tr>
                      <td>2023-07-15</td>
                      <td>SVIT/2023/1234</td>
                      <td>₹{(student.paidAmount / 2).toLocaleString()}</td>
                      <td>Online</td>
                      <td><Badge bg="success">Success</Badge></td>
                    </tr>
                    {student.paidAmount === student.feeAmount && (
                      <tr>
                        <td>2024-01-10</td>
                        <td>SVIT/2024/5678</td>
                        <td>₹{(student.paidAmount / 2).toLocaleString()}</td>
                        <td>Online</td>
                        <td><Badge bg="success">Success</Badge></td>
                      </tr>
                    )}
                  </>
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">No payment records found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Tab>
          
          <Tab eventKey="breakdown" title="Fee Breakdown">
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Fee Component</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition Fee</td>
                  <td>₹{Math.round(student.feeAmount * 0.8).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Examination Fee</td>
                  <td>₹{Math.round(student.feeAmount * 0.07).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Laboratory Fee</td>
                  <td>₹{Math.round(student.feeAmount * 0.08).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Library Fee</td>
                  <td>₹{Math.round(student.feeAmount * 0.03).toLocaleString()}</td>
                </tr>
                <tr>
                  <td>Internet & Computer Fee</td>
                  <td>₹{Math.round(student.feeAmount * 0.02).toLocaleString()}</td>
                </tr>
                <tr className="table-secondary">
                  <th>Total Fee</th>
                  <th>₹{student.feeAmount.toLocaleString()}</th>
                </tr>
              </tbody>
            </Table>
          </Tab>
          
          <Tab eventKey="actions" title="Payment Actions">
            <div className="p-3">
              {student.dueAmount > 0 ? (
                <>
                  <h6>Record New Payment</h6>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Amount (₹)</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>₹</InputGroup.Text>
                          <Form.Control type="number" placeholder="Enter amount" defaultValue={student.dueAmount} />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Payment Date</Form.Label>
                        <Form.Control type="date" defaultValue={new Date().toISOString().substr(0, 10)} />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Payment Mode</Form.Label>
                        <Form.Select>
                          <option value="online">Online Payment</option>
                          <option value="cash">Cash</option>
                          <option value="cheque">Cheque</option>
                          <option value="dd">Demand Draft</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Reference Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter reference number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button variant="success">
                      <FaCheck className="me-1" /> Record Payment
                    </Button>
                  </div>
                </>
              ) : (
                <Alert variant="success" className="d-flex align-items-center mb-0">
                  <FaCheck className="me-2" size={20} />
                  <div>
                    <strong>All payments completed!</strong> No pending fee for this student.
                  </div>
                </Alert>
              )}
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" className="me-2">
          <FaDownload className="me-1" /> Download Receipt
        </Button>
        <Button variant="outline-info" className="me-2">
          <FaEnvelope className="me-1" /> Send Reminder
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentFeeModal;