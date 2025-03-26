// File: src/components/timetable/TimetableList.js
import React from 'react';
import { Row, Col, Card, Alert, Table, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaDownload, FaTrashAlt } from 'react-icons/fa';

const TimetableList = ({
  timetables,
  setSelectedDepartment,
  setSelectedYear,
  setSelectedSemester,
  showViewModal
}) => {
  // Handle view timetable
  const handleViewTimetable = (timetable) => {
    setSelectedDepartment(timetable.department);
    setSelectedYear(timetable.year);
    setSelectedSemester(timetable.semester);
    showViewModal();
  };

  return (
    <Row className="mb-4">
      <Col lg={12}>
        <Card>
          <Card.Header className="bg-white">
            <h5 className="mb-0">Available Timetables</h5>
          </Card.Header>
          <Card.Body>
            {timetables.length === 0 ? (
              <Alert variant="info">
                No timetables found for the selected criteria. Please try different filters or upload a new timetable.
              </Alert>
            ) : (
              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Year</th>
                      <th>Semester</th>
                      <th>Last Updated</th>
                      <th>Updated By</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetables.map((timetable) => (
                      <tr key={timetable.id}>
                        <td>{timetable.department}</td>
                        <td>{timetable.year}rd Year</td>
                        <td>{timetable.semester === 'odd' ? 'Odd' : 'Even'} Semester</td>
                        <td>{timetable.updatedAt}</td>
                        <td>{timetable.updatedBy}</td>
                        <td>
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="me-1"
                            onClick={() => handleViewTimetable(timetable)}
                          >
                            <FaEye /> View
                          </Button>
                          <Button variant="outline-success" size="sm" className="me-1">
                            <FaEdit /> Edit
                          </Button>
                          <Button variant="outline-secondary" size="sm" className="me-1">
                            <FaDownload /> Download
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            <FaTrashAlt /> Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TimetableList;