// File: src/components/student/modals/ViewStudentModal.js
import React from 'react';
import { Modal, Button, Row, Col, Tabs, Tab, Badge, Table, Alert } from 'react-bootstrap';

// Import data
import { studentDetails } from '../../../data/studentData';

const ViewStudentModal = ({ show, onHide, student }) => {
  if (!student) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="details" id="student-tabs" className="mb-3">
          <Tab eventKey="details" title="Personal Details">
            <Row className="mb-3">
              <Col md={6}>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Roll No:</strong> {student.rollNo}</p>
                <p><strong>Department:</strong> {student.department}</p>
                <p><strong>Year:</strong> {student.year}</p>
              </Col>
              <Col md={6}>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
                <p>
                  <strong>Status:</strong> {' '}
                  <Badge bg={student.status === 'active' ? 'success' : 'danger'}>
                    {student.status}
                  </Badge>
                </p>
              </Col>
            </Row>
            
            <h6 className="mt-4">Additional Information</h6>
            <Row>
              <Col md={6}>
                <p><strong>Date of Birth:</strong> {studentDetails.personal.dateOfBirth}</p>
                <p><strong>Gender:</strong> {studentDetails.personal.gender}</p>
                <p><strong>Blood Group:</strong> {studentDetails.personal.bloodGroup}</p>
                <p><strong>Category:</strong> {studentDetails.personal.category}</p>
              </Col>
              <Col md={6}>
                <p><strong>Address:</strong> {studentDetails.personal.address}</p>
                <p><strong>District:</strong> {studentDetails.personal.district}</p>
                <p><strong>State:</strong> {studentDetails.personal.state}</p>
                <p><strong>PIN Code:</strong> {studentDetails.personal.pinCode}</p>
              </Col>
            </Row>
          </Tab>
          
          <Tab eventKey="academic" title="Academic Information">
            <h6>Academic Performance</h6>
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>CGPA</th>
                  <th>Standing</th>
                  <th>Backlogs</th>
                </tr>
              </thead>
              <tbody>
                {studentDetails.academic.semesters.map((semester, index) => (
                  <tr key={index}>
                    <td>{semester.semester}</td>
                    <td>{semester.cgpa}</td>
                    <td>{semester.standing}</td>
                    <td>{semester.backlogs}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <h6 className="mt-4">Achievements & Activities</h6>
            <ul>
              {studentDetails.academic.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </Tab>
          
          <Tab eventKey="fee" title="Fee Information">
            <h6>Fee Payment History</h6>
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                {studentDetails.fee.payments.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.date}</td>
                    <td>₹{payment.amount.toLocaleString()}</td>
                    <td>{payment.mode}</td>
                    <td>
                      <Badge bg="success">{payment.status}</Badge>
                    </td>
                    <td>{payment.transactionId}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <h6 className="mt-4">Fee Summary</h6>
            <Row>
              <Col md={6}>
                <p><strong>Total Fee:</strong> ₹{studentDetails.fee.summary.totalFee.toLocaleString()}</p>
                <p><strong>Amount Paid:</strong> ₹{studentDetails.fee.summary.amountPaid.toLocaleString()}</p>
                <p><strong>Due Amount:</strong> ₹{studentDetails.fee.summary.dueAmount.toLocaleString()}</p>
              </Col>
              <Col md={6}>
                <p><strong>Scholarship Amount:</strong> ₹{studentDetails.fee.summary.scholarshipAmount.toLocaleString()}</p>
                <p><strong>Next Due Date:</strong> {studentDetails.fee.summary.nextDueDate}</p>
              </Col>
            </Row>

            {studentDetails.fee.summary.dueAmount > 0 && (
              <Alert variant="warning" className="mt-3">
                This student has pending fee payments. Please remind them about the due date.
              </Alert>
            )}
          </Tab>
          
          <Tab eventKey="attendance" title="Attendance">
            <h6>Current Semester Attendance</h6>
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Present</th>
                  <th>Total</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {studentDetails.attendance.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td>{subject.name}</td>
                    <td>{subject.present}</td>
                    <td>{subject.total}</td>
                    <td>{subject.percentage.toFixed(1)}%</td>
                    <td>
                      <Badge bg={subject.status === 'Good' ? 'success' : 'primary'}>
                        {subject.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <div className="text-center mt-4">
              <Button variant="outline-primary" size="sm">Download Attendance Report</Button>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">
          Edit Details
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewStudentModal;