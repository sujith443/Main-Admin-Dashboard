// File: src/components/fee/FeeFilters.jsx
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { 
  FaSearch, 
  FaFileCsv, 
  FaFileExcel, 
  FaEnvelope 
} from 'react-icons/fa';
import { getDepartmentOptions, getYearOptions, getStatusOptions } from '../../data/feeData';

const FeeFilters = ({ 
  searchTerm, 
  setSearchTerm, 
  filterDepartment, 
  setFilterDepartment, 
  filterYear, 
  setFilterYear, 
  filterStatus, 
  setFilterStatus 
}) => {
  const departmentOptions = getDepartmentOptions();
  const yearOptions = getYearOptions();
  const statusOptions = getStatusOptions();

  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <div className="input-group">
                <Form.Control 
                  type="text" 
                  placeholder="Search by name or roll no"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-secondary">
                  <FaSearch />
                </Button>
              </div>
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select 
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
              >
                {departmentOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select 
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                {yearOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3">
              <Form.Label>Payment Status</Form.Label>
              <Form.Select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mb-2">
          <div className="d-flex align-items-center">
            <span className="text-muted me-2">Export:</span>
            <Button variant="outline-secondary" size="sm" className="me-2">
              <FaFileCsv className="me-1" /> CSV
            </Button>
            <Button variant="outline-secondary" size="sm" className="me-2">
              <FaFileExcel className="me-1" /> Excel
            </Button>
            <Button variant="outline-primary" size="sm">
              <FaEnvelope className="me-1" /> Send Reminders
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FeeFilters;