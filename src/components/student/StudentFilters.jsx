// File: src/components/student/StudentFilters.js
import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch, FaFileCsv, FaFileExcel, FaFilePdf } from 'react-icons/fa';

const StudentFilters = ({
  searchTerm,
  setSearchTerm,
  filterDepartment,
  setFilterDepartment,
  filterYear,
  setFilterYear,
  filterStatus,
  setFilterStatus,
  departments,
  years
}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col md={6} lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <div className="input-group">
                <Form.Control 
                  type="text" 
                  placeholder="Search by name, roll no, or email"
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
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.value} value={dept.value}>{dept.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={2}>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select 
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year.value} value={year.value}>{year.label}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} lg={3}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
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
            <Button variant="outline-secondary" size="sm">
              <FaFilePdf className="me-1" /> PDF
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentFilters;