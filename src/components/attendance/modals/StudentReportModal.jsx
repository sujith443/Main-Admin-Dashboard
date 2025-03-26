// File: src/components/attendance/modals/StudentReportModal.js
import React from 'react';
import { Modal, Button, Row, Col, Alert, Badge, Table, Tabs, Tab } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { FaDownload, FaEnvelope, FaBell } from 'react-icons/fa';

const StudentReportModal = ({ show, onHide, attendanceReport }) => {
  if (!attendanceReport) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Student Attendance Report</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-4">
          <Row>
            <Col md={6}>
              <p className="mb-2"><strong>Name:</strong> {attendanceReport.student.name}</p>
              <p className="mb-2"><strong>Roll No:</strong> {attendanceReport.student.rollNo}</p>
              <p className="mb-2"><strong>Department:</strong> {attendanceReport.student.department}</p>
            </Col>
            <Col md={6}>
              <p className="mb-2"><strong>Year:</strong> {attendanceReport.student.year}</p>
              <p className="mb-2"><strong>Section:</strong> {attendanceReport.student.section}</p>
              <p className="mb-2">
                <strong>Overall Attendance:</strong> {' '}
                <Badge bg={attendanceReport.overall.percentage >= 75 ? 'success' : 'danger'}>
                  {attendanceReport.overall.percentage}%
                </Badge>
              </p>
            </Col>
          </Row>
          
          {attendanceReport.overall.percentage < 75 && (
            <Alert variant="warning" className="d-flex align-items-center">
              <FaBell className="me-2" size={20} />
              <div>
                <strong>Attendance Alert!</strong> Overall attendance is below 75%, which is the minimum requirement.
              </div>
            </Alert>
          )}
        </div>
        
        <Tabs defaultActiveKey="subject" id="attendance-report-tabs" className="mb-3">
          <Tab eventKey="subject" title="Subject-wise">
            <Table striped bordered responsive>
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject Name</th>
                  <th>Present / Total</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceReport.subjects.map((subject) => (
                  <tr key={subject.code}>
                    <td>{subject.code}</td>
                    <td>{subject.name}</td>
                    <td>{subject.present} / {subject.total}</td>
                    <td>{subject.percentage.toFixed(1)}%</td>
                    <td>
                      <Badge bg={subject.percentage >= 75 ? 'success' : 'danger'}>
                        {subject.percentage >= 75 ? 'Regular' : 'Shortage'}
                      </Badge>
                    </td>
                  </tr>
                ))}
                <tr className="table-secondary">
                  <th colSpan="2">Overall</th>
                  <th>{attendanceReport.overall.present} / {attendanceReport.overall.total}</th>
                  <th>{attendanceReport.overall.percentage.toFixed(1)}%</th>
                  <th>
                    <Badge bg={attendanceReport.overall.percentage >= 75 ? 'success' : 'danger'}>
                      {attendanceReport.overall.percentage >= 75 ? 'Regular' : 'Shortage'}
                    </Badge>
                  </th>
                </tr>
              </tbody>
            </Table>
          </Tab>
          
          <Tab eventKey="monthly" title="Monthly Trend">
            <Table striped bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceReport.monthly.map((month, index) => (
                  <tr key={index}>
                    <td>{month.month}</td>
                    <td>{month.percentage}%</td>
                    <td>
                      <Badge bg={month.percentage >= 75 ? 'success' : 'danger'}>
                        {month.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            
            <div style={{ height: '250px' }}>
              <Line 
                data={{
                  labels: attendanceReport.monthly.map(m => m.month),
                  datasets: [{
                    label: 'Attendance %',
                    data: attendanceReport.monthly.map(m => m.percentage),
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                  }]
                }} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      min: 70,
                      max: 100,
                      ticks: {
                        callback: function(value) {
                          return value + '%';
                        }
                      }
                    }
                  }
                }}
              />
            </div>
          </Tab>
          
          <Tab eventKey="calendar" title="Calendar View">
            <div className="mb-3">
              <Row className="mb-3">
                <Col md={6}>
                  <h6>Monthly Attendance Calendar</h6>
                  <p className="text-muted small">
                    Shows attendance for each class day in the selected month
                  </p>
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-end">
                    <select className="form-select form-select-sm" style={{ width: '180px' }}>
                      <option value="1">January 2024</option>
                      <option value="2">February 2024</option>
                      <option value="3">March 2024</option>
                      <option value="4">April 2024</option>
                    </select>
                  </div>
                </Col>
              </Row>
              
              <Table bordered className="text-center">
                <thead>
                  <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                    <th>Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1<br/><Badge bg="success">P</Badge></td>
                    <td>2<br/><Badge bg="success">P</Badge></td>
                    <td>3<br/><Badge bg="success">P</Badge></td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>5<br/><Badge bg="success">P</Badge></td>
                    <td>6<br/><Badge bg="success">P</Badge></td>
                    <td>7<br/><Badge bg="danger">A</Badge></td>
                    <td>8<br/><Badge bg="success">P</Badge></td>
                    <td>9<br/><Badge bg="success">P</Badge></td>
                    <td>10<br/><Badge bg="success">P</Badge></td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>12<br/><Badge bg="success">P</Badge></td>
                    <td>13<br/><Badge bg="success">P</Badge></td>
                    <td>14<br/><Badge bg="success">P</Badge></td>
                    <td>15<br/><Badge bg="success">P</Badge></td>
                    <td>16<br/><Badge bg="danger">A</Badge></td>
                    <td>17<br/><Badge bg="success">P</Badge></td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>19<br/><Badge bg="success">P</Badge></td>
                    <td>20<br/><Badge bg="success">P</Badge></td>
                    <td>21<br/><Badge bg="success">P</Badge></td>
                    <td>22<br/><Badge bg="success">P</Badge></td>
                    <td>23<br/><Badge bg="success">P</Badge></td>
                    <td>24<br/><Badge bg="success">P</Badge></td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>26<br/><Badge bg="secondary">H</Badge></td>
                    <td>27<br/><Badge bg="success">P</Badge></td>
                    <td>28<br/><Badge bg="success">P</Badge></td>
                    <td>29<br/><Badge bg="success">P</Badge></td>
                    <td>30<br/><Badge bg="success">P</Badge></td>
                    <td>31<br/><Badge bg="success">P</Badge></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              
              <div className="d-flex justify-content-around mt-3">
                <div className="d-flex align-items-center">
                  <Badge bg="success" className="me-1">P</Badge> Present
                </div>
                <div className="d-flex align-items-center">
                  <Badge bg="danger" className="me-1">A</Badge> Absent
                </div>
                <div className="d-flex align-items-center">
                  <Badge bg="secondary" className="me-1">H</Badge> Holiday
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" className="me-2">
          <FaDownload className="me-1" /> Download Report
        </Button>
        <Button variant="outline-info" className="me-2">
          <FaEnvelope className="me-1" /> Send to Parent
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentReportModal;