// File: src/components/curriculum/RegulationsTab.js
import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { FaFileUpload, FaEye, FaDownload, FaTrashAlt } from 'react-icons/fa';

// Import data
import { regulationsData } from '../../data/curriculumData';

const RegulationsTab = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Academic Regulations</h5>
          <div>
            <Button variant="outline-primary" className="me-2">
              <FaFileUpload className="me-1" /> Upload Regulation
            </Button>
          </div>
        </div>
        
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Regulation Year</th>
              <th>Applicable Batches</th>
              <th>Uploaded On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {regulationsData.map((regulation) => (
              <tr key={regulation.id}>
                <td>{regulation.title}</td>
                <td>{regulation.year}</td>
                <td>{regulation.applicableBatches}</td>
                <td>{regulation.updatedOn}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-1">
                    <FaEye /> View
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
      </Card.Body>
    </Card>
  );
};

export default RegulationsTab;