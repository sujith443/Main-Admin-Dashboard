// File: src/components/attendance/ViewAttendance.js
import React from 'react';
import { Row, Col, Card, Form, Button, Table, Badge } from 'react-bootstrap';
import { 
  FaSearch, 
  FaDownload, 
  FaEye 
} from 'react-icons/fa';

// Import sample data
import { recentAttendanceRecords } from '../../data/attendanceData';

// Import components
import ReportGenerator from './ReportGenerator';

const ViewAttendance = ({ setShowAttendanceReportModal, subjects }) => {
  return (
    <Row>
      <Col lg={12}>
        <Card className="mb-4">
          <Card.Header className="bg-white">
            <h5 className="mb-0">Attendance Report Generator</h5>
          </Card.Header>
          <Card.Body>
            <ReportGenerator subjects={subjects} />
          </Card.Body>
        </Card>
      </Col>
      
      <Col lg={12}>
        <Card>
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Recent Attendance Records</h5>
            <Form.Select style={{ width: '200px' }}>
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
              <option>This Month</option>
            </Form.Select>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Year/Section</th>
                    <th>Subject</th>
                    <th>Period</th>
                    <th>Present/Total</th>
                    <th>Percentage</th>
                    <th>Marked By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAttendanceRecords.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.department}</td>
                      <td>{record.yearSection}</td>
                      <td>{record.subject}</td>
                      <td>{record.period}</td>
                      <td>{record.presentTotal}</td>
                      <td>
                        <Badge bg={record.percentage >= 85 ? 'success' : record.percentage >= 75 ? 'primary' : 'warning'}>
                          {record.percentage.toFixed(1)}%
                        </Badge>
                      </td>
                      <td>{record.markedBy}</td>
                      <td>
                        <Button variant="outline-primary" size="sm" className="me-1" onClick={() => setShowAttendanceReportModal(true)}>
                          <FaEye /> View
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                          <FaDownload /> Export
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted">Showing 5 of 342 records</span>
              <div>
                <Button variant="outline-primary" size="sm" className="me-2">Previous</Button>
                <Button variant="outline-primary" size="sm">Next</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewAttendance;