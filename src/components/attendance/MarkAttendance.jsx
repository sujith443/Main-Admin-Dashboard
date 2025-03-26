// File: src/components/attendance/MarkAttendance.js
import React from 'react';
import { Row, Col, Card, Form, Button, Table, Badge, Dropdown } from 'react-bootstrap';
import { 
  FaSearch, 
  FaCheck, 
  FaTimes, 
  FaUserCheck, 
  FaUserTimes, 
  FaEllipsisV,
  FaChartBar, 
  FaCalendarAlt, 
  FaEnvelope,
  FaDownload,
  FaPrint,
  FaInfoCircle
} from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';

// Components
import ClassSelectionForm from './ClassSelectionForm';

const MarkAttendance = ({ classSelectionProps, studentListProps }) => {
  const { 
    students, 
    searchTerm, 
    setSearchTerm, 
    toggleAttendance, 
    markAllPresent, 
    markAllAbsent, 
    saveAttendance, 
    attendanceStats, 
    setShowAttendanceReportModal 
  } = studentListProps;

  const { selectedSubject, subjects } = classSelectionProps;

  // Chart data for attendance distribution
  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [attendanceStats.presentCount, attendanceStats.absentCount],
        backgroundColor: [
          'rgba(54, 179, 126, 0.7)',
          'rgba(255, 86, 48, 0.7)',
        ],
        borderColor: [
          'rgba(54, 179, 126, 1)',
          'rgba(255, 86, 48, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <h5 className="mb-3">Class Details</h5>
          <ClassSelectionForm {...classSelectionProps} />
          
          <div className="d-flex align-items-center">
            {selectedSubject && subjects.find(s => s.code === selectedSubject) && (
              <div className="alert alert-info mb-0 py-2 px-3 d-flex align-items-center">
                <FaInfoCircle className="me-2" />
                <div>
                  <strong>{subjects.find(s => s.code === selectedSubject).name}</strong> - 
                  Faculty: {subjects.find(s => s.code === selectedSubject).faculty}
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
      
      <Row className="mb-4">
        <Col lg={9}>
          <Card>
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Student Attendance</h5>
              <div className="d-flex gap-2">
                <Form.Group className="mb-0">
                  <Form.Control 
                    type="text" 
                    placeholder="Search by name or roll no"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-primary" className="d-flex align-items-center">
                  <FaSearch />
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th style={{ width: '10%' }}>Roll No</th>
                      <th>Name</th>
                      <th style={{ width: '15%' }}>Status</th>
                      <th style={{ width: '20%' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td>{student.rollNo}</td>
                        <td className="d-flex align-items-center">
                          <div 
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2"
                            style={{ width: '32px', height: '32px', fontSize: '14px' }}
                          >
                            {student.avatar}
                          </div>
                          {student.name}
                        </td>
                        <td>
                          <Badge 
                            bg={student.present ? 'success' : 'danger'}
                            className="d-flex align-items-center w-75 justify-content-center p-2"
                          >
                            {student.present ? (
                              <>
                                <FaUserCheck className="me-1" /> Present
                              </>
                            ) : (
                              <>
                                <FaUserTimes className="me-1" /> Absent
                              </>
                            )}
                          </Badge>
                        </td>
                        <td>
                          <Button 
                            variant={student.present ? 'outline-danger' : 'outline-success'} 
                            size="sm"
                            onClick={() => toggleAttendance(student.id)}
                            className="me-2"
                          >
                            {student.present ? (
                              <>
                                <FaTimes className="me-1" /> Mark Absent
                              </>
                            ) : (
                              <>
                                <FaCheck className="me-1" /> Mark Present
                              </>
                            )}
                          </Button>
                          <Dropdown as="span">
                            <Dropdown.Toggle variant="light" size="sm" id={`dropdown-${student.id}`}>
                              <FaEllipsisV />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => setShowAttendanceReportModal(true)}>
                                <FaChartBar className="me-2" /> View Report
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <FaCalendarAlt className="me-2" /> View History
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <FaEnvelope className="me-2" /> Send Alert
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              
              {students.length === 0 && (
                <div className="text-center p-4">
                  <p className="mb-0">No students found matching your search criteria.</p>
                </div>
              )}
              
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted">Showing {students.length} students</span>
                <div className="d-flex gap-2">
                  <Button variant="outline-success" onClick={markAllPresent}>
                    <FaCheck className="me-1" /> Mark All Present
                  </Button>
                  <Button variant="outline-danger" onClick={markAllAbsent}>
                    <FaTimes className="me-1" /> Mark All Absent
                  </Button>
                  <Button variant="primary" onClick={saveAttendance}>
                    <FaCheck className="me-1" /> Save Attendance
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="h-100">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Attendance Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="text-center mb-3">
                <div style={{ height: '180px' }}>
                  <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                </div>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Students:</span>
                  <strong>{attendanceStats.totalCount}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Present:</span>
                  <strong className="text-success">{attendanceStats.presentCount}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Absent:</span>
                  <strong className="text-danger">{attendanceStats.absentCount}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Attendance Rate:</span>
                  <strong>{Math.round((attendanceStats.presentCount / attendanceStats.totalCount) * 100)}%</strong>
                </div>
              </div>
              
              <hr />
              
              <div className="d-grid gap-2 mt-4">
                <Button variant="outline-primary" size="sm">
                  <FaDownload className="me-1" /> Export Attendance
                </Button>
                <Button variant="outline-info" size="sm">
                  <FaPrint className="me-1" /> Print Attendance
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MarkAttendance;