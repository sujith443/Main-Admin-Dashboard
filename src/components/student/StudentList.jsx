// File: src/components/student/StudentList.js
import React from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';
import { FaEdit, FaTrashAlt, FaSort } from 'react-icons/fa';

const StudentList = ({ students, totalStudents, handleViewStudent }) => {
  // Get badge variant based on status
  const getBadgeVariant = (status) => {
    return status === 'active' ? 'success' : 'danger';
  };

  return (
    <Card>
      <Card.Body>
        <div className="table-responsive">
          <Table hover className="align-middle">
            <thead>
              <tr>
                <th>
                  <div className="d-flex align-items-center">
                    Roll No
                    <Button variant="link" className="p-0 ms-1">
                      <FaSort size={12} />
                    </Button>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-center">
                    Name
                    <Button variant="link" className="p-0 ms-1">
                      <FaSort size={12} />
                    </Button>
                  </div>
                </th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
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
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <Badge bg={getBadgeVariant(student.status)}>
                      {student.status}
                    </Badge>
                  </td>
                  <td>
                    <Button 
                      variant="link" 
                      className="p-0 me-2 text-primary"
                      onClick={() => handleViewStudent(student)}
                    >
                      View
                    </Button>
                    <Button variant="link" className="p-0 me-2 text-success">
                      <FaEdit />
                    </Button>
                    <Button variant="link" className="p-0 text-danger">
                      <FaTrashAlt />
                    </Button>
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
          <div>
            <span className="text-muted">Showing {students.length} of {totalStudents} students</span>
          </div>
          <div>
            <Button variant="outline-primary" size="sm" className="me-2">Previous</Button>
            <Button variant="outline-primary" size="sm">Next</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentList;