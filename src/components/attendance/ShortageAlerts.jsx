// File: src/components/attendance/ShortageAlerts.js
import React from 'react';
import { Row, Col, Card, Form, Button, Table, Badge } from 'react-bootstrap';
import { 
  FaDownload, 
  FaBell, 
  FaEye 
} from 'react-icons/fa';

// Import sample data
import { shortageData } from '../../data/attendanceData';

const ShortageAlerts = ({ setShowAttendanceReportModal }) => {
  return (
    <Row>
      <Col lg={12}>
        <Card>
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Attendance Shortage Report</h5>
            <div>
              <Button variant="outline-primary" size="sm" className="me-2">
                <FaDownload className="me-1" /> Download Report
              </Button>
              <Button variant="outline-danger" size="sm">
                <FaBell className="me-1" /> Send Alerts
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <Row className="mb-4">
              <Col md={3}>
                <Form.Group>
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
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Shortage Level</Form.Label>
                  <Form.Select>
                    <option value="all">All Levels</option>
                    <option value="critical">Critical (Below 65%)</option>
                    <option value="warning">Warning (65% - 75%)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group>
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
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Alert Status</Form.Label>
                  <Form.Select>
                    <option value="all">All</option>
                    <option value="sent">Alert Sent</option>
                    <option value="pending">Alert Pending</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Overall %</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {shortageData.map((student, index) => (
                  <tr key={index}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.department}</td>
                    <td>{student.year}</td>
                    <td>{student.overallPercentage.toFixed(1)}%</td>
                    <td>
                      <Badge bg={student.status === 'Critical' ? 'danger' : 'warning'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="outline-primary" size="sm" className="me-1" onClick={() => setShowAttendanceReportModal(true)}>
                        <FaEye /> View
                      </Button>
                      <Button variant="outline-info" size="sm">
                        <FaBell /> Alert
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <Row className="mt-4">
              <Col md={6}>
                <Card className="bg-light">
                  <Card.Body>
                    <h6 className="mb-3">Shortage Summary</h6>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Total Students with Shortage:</span>
                      <strong className="text-danger">{shortageData.length}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Critical Cases (Below 65%):</span>
                      <strong className="text-danger">
                        {shortageData.filter(s => s.status === 'Critical').length}
                      </strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Warning Cases (65% - 75%):</span>
                      <strong className="text-warning">
                        {shortageData.filter(s => s.status === 'Warning').length}
                      </strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Department with Most Cases:</span>
                      <strong>CSE</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="bg-light">
                  <Card.Body>
                    <h6 className="mb-3">Recommended Actions</h6>
                    <ol className="ps-3 mb-0">
                      <li className="mb-2">Send automated alerts to students with attendance below 65%</li>
                      <li className="mb-2">Schedule counseling sessions for students with critical shortage</li>
                      <li className="mb-2">Notify parents of students with attendance below 60%</li>
                      <li className="mb-2">Generate department-wise shortage reports for HODs</li>
                      <li className="mb-2">Follow up on previously sent alerts</li>
                    </ol>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ShortageAlerts;