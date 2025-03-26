// File: src/components/attendance/AttendanceAnalytics.js
import React from 'react';
import { Row, Col, Card, Form, Table } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';

// Import sample data
import { 
  barChartData, 
  barChartOptions, 
  monthlyTrendData, 
  lineChartOptions 
} from '../../data/attendanceData';

const AttendanceAnalytics = () => {
  return (
    <Row>
      <Col lg={12}>
        <Card className="mb-4">
          <Card.Header className="bg-white">
            <h5 className="mb-0">Attendance Statistics</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={8}>
                <div style={{ height: '400px' }}>
                  <Bar data={barChartData} options={barChartOptions} />
                </div>
              </Col>
              <Col md={4}>
                <Card className="bg-light">
                  <Card.Body>
                    <h6 className="mb-3">Attendance Summary (Current Month)</h6>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Total Students:</span>
                      <strong>1250</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Average Attendance:</span>
                      <strong>88.2%</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Students Below 75%:</span>
                      <strong className="text-danger">86</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Working Days:</span>
                      <strong>22</strong>
                    </div>
                    <h6 className="mt-4 mb-3">Department-wise Standing</h6>
                    <Table bordered size="sm">
                      <thead>
                        <tr>
                          <th>Department</th>
                          <th>Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CSE</td>
                          <td>92%</td>
                        </tr>
                        <tr>
                          <td>ECE</td>
                          <td>87%</td>
                        </tr>
                        <tr>
                          <td>Mechanical</td>
                          <td>83%</td>
                        </tr>
                        <tr>
                          <td>Civil</td>
                          <td>89%</td>
                        </tr>
                        <tr>
                          <td>EEE</td>
                          <td>86%</td>
                        </tr>
                        <tr>
                          <td>IT</td>
                          <td>90%</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      
      <Col lg={12}>
        <Card>
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Attendance Trends</h5>
            <div style={{ width: '200px' }}>
              <Form.Select>
                <option value="CSE">CSE Department</option>
                <option value="ECE">ECE Department</option>
                <option value="Mechanical">Mechanical Engineering</option>
                <option value="Civil">Civil Engineering</option>
                <option value="EEE">EEE Department</option>
                <option value="IT">IT Department</option>
              </Form.Select>
            </div>
          </Card.Header>
          <Card.Body>
            <div style={{ height: '400px' }}>
              <Line 
                data={monthlyTrendData} 
                options={lineChartOptions}
              />
            </div>
            
            <div className="mt-4">
              <h6 className="mb-3">Key Insights</h6>
              <Row>
                <Col md={4}>
                  <Card className="bg-light">
                    <Card.Body className="p-3">
                      <h6 className="text-success">Highest Attendance</h6>
                      <div className="d-flex justify-content-between">
                        <span>CSE - 3rd Year</span>
                        <strong>95.4%</strong>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="bg-light">
                    <Card.Body className="p-3">
                      <h6 className="text-danger">Lowest Attendance</h6>
                      <div className="d-flex justify-content-between">
                        <span>Mechanical - 2nd Year</span>
                        <strong>79.2%</strong>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="bg-light">
                    <Card.Body className="p-3">
                      <h6 className="text-primary">Most Improved</h6>
                      <div className="d-flex justify-content-between">
                        <span>IT - 1st Year</span>
                        <strong>+5.2%</strong>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AttendanceAnalytics;