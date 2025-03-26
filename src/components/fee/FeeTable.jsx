// File: src/components/fee/FeeTable.jsx
import React from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';
import { FaSort, FaEye, FaEdit, FaEnvelope } from 'react-icons/fa';
import { getBadgeVariant, getStatusText } from '../../data/feeData';

const FeeTable = ({ filteredFeeData, totalRecords, onViewStudent }) => {
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
                <th>Total Fee</th>
                <th>Paid Amount</th>
                <th>Due Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeeData.map((student) => (
                <tr key={student.id}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>₹{student.feeAmount.toLocaleString()}</td>
                  <td>₹{student.paidAmount.toLocaleString()}</td>
                  <td className={student.dueAmount > 0 ? 'text-danger' : ''}>
                    ₹{student.dueAmount.toLocaleString()}
                  </td>
                  <td>{student.dueDate !== 'N/A' ? student.dueDate : '-'}</td>
                  <td>
                    <Badge bg={getBadgeVariant(student.status)}>
                      {getStatusText(student.status)}
                    </Badge>
                  </td>
                  <td>
                    <Button 
                      variant="link" 
                      className="p-0 me-2 text-primary"
                      onClick={() => onViewStudent(student)}
                    >
                      <FaEye />
                    </Button>
                    <Button variant="link" className="p-0 me-2 text-success">
                      <FaEdit />
                    </Button>
                    {student.dueAmount > 0 && (
                      <Button variant="link" className="p-0 text-info">
                        <FaEnvelope />
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        
        {filteredFeeData.length === 0 && (
          <div className="text-center p-4">
            <p className="mb-0">No fee records found matching your search criteria.</p>
          </div>
        )}
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span className="text-muted">Showing {filteredFeeData.length} of {totalRecords} records</span>
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

export default FeeTable;