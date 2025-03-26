// File: src/pages/FeeDetails.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Badge, Modal, Tabs, Tab, InputGroup, Alert } from 'react-bootstrap';
import { 
  FaSearch, 
  FaMoneyBillWave, 
  FaUpload, 
  FaDownload, 
  FaEdit, 
  FaTrashAlt, 
  FaEye, 
  FaFileCsv, 
  FaFileExcel, 
  FaEnvelope,
  FaFilter,
  FaSort,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const FeeDetails = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample fee data - in a real app, this would come from an API
  const [feeData, setFeeData] = useState([
    {
      id: 1,
      rollNo: "19CS101",
      name: "Amit Kumar",
      department: "CSE",
      year: 3,
      feeAmount: 90000,
      paidAmount: 90000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 2,
      rollNo: "20EC112",
      name: "Priya Sharma",
      department: "ECE",
      year: 2,
      feeAmount: 90000,
      paidAmount: 45000,
      dueAmount: 45000,
      dueDate: "2024-04-30",
      status: "partial"
    },
    {
      id: 3,
      rollNo: "18ME105",
      name: "Rahul Singh",
      department: "Mechanical",
      year: 4,
      feeAmount: 85000,
      paidAmount: 85000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 4,
      rollNo: "21CV108",
      name: "Shreya Reddy",
      department: "Civil",
      year: 1,
      feeAmount: 80000,
      paidAmount: 0,
      dueAmount: 80000,
      dueDate: "2024-04-15",
      status: "unpaid"
    },
    {
      id: 5,
      rollNo: "20EE115",
      name: "Rajesh Kumar",
      department: "EEE",
      year: 2,
      feeAmount: 85000,
      paidAmount: 42500,
      dueAmount: 42500,
      dueDate: "2024-04-30",
      status: "partial"
    },
    {
      id: 6,
      rollNo: "19IT118",
      name: "Kavya Patel",
      department: "IT",
      year: 3,
      feeAmount: 90000,
      paidAmount: 90000,
      dueAmount: 0,
      dueDate: "N/A",
      status: "paid"
    },
    {
      id: 7,
      rollNo: "18CS120",
      name: "Vikram Dutta",
      department: "CSE",
      year: 4,
      feeAmount: 90000,
      paidAmount: 45000,
      dueAmount: 45000,
      dueDate: "2024-04-30",
      status: "partial"
    }
  ]);
  
  // Filter and search fee data
  const filteredFeeData = feeData.filter(student => {
    return (
      (filterDepartment === '' || student.department === filterDepartment) &&
      (filterYear === '' || student.year === parseInt(filterYear)) &&
      (filterStatus === '' || student.status === filterStatus) &&
      (searchTerm === '' || 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  // Summary stats
  const feeSummary = {
    totalFees: feeData.reduce((sum, student) => sum + student.feeAmount, 0),
    collectedFees: feeData.reduce((sum, student) => sum + student.paidAmount, 0),
    pendingFees: feeData.reduce((sum, student) => sum + student.dueAmount, 0),
    paidCount: feeData.filter(student => student.status === 'paid').length,
    partialCount: feeData.filter(student => student.status === 'partial').length,
    unpaidCount: feeData.filter(student => student.status === 'unpaid').length
  };
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Fee Details</h2>
        <div>
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => setShowUploadModal(true)}
          >
            <FaUpload className="me-1" /> Upload Fee Data
          </Button>
          <Button 
            variant="primary"
            onClick={() => setShowUpdateModal(true)}
          >
            <FaEdit className="me-1" /> Update Fee Details
          </Button>
        </div>
      </div>
      
      {/* Fee Summary Cards */}
      <Row className="g-4 mb-4">
        <Col lg={3} sm={6}>
          <Card className="dashboard-card">
            <Card.Body className="d-flex flex-column align-items-start">
              <div className="card-icon bg-primary text-white">
                <FaMoneyBillWave />
              </div>
              <h6 className="text-muted mb-1">Total Fees</h6>
              <h3>₹{feeSummary.totalFees.toLocaleString()}</h3>
              <small className="text-muted">
                Academic Year 2023-2024
              </small>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} sm={6}>
          <Card className="dashboard-card">
            <Card.Body className="d-flex flex-column align-items-start">
              <div className="card-icon bg-success text-white">
                <FaCheck />
              </div>
              <h6 className="text-muted mb-1">Collected Fees</h6>
              <h3>₹{feeSummary.collectedFees.toLocaleString()}</h3>
              <small className="text-success">
                {Math.round((feeSummary.collectedFees / feeSummary.totalFees) * 100)}% of total fees
              </small>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} sm={6}>
          <Card className="dashboard-card">
            <Card.Body className="d-flex flex-column align-items-start">
              <div className="card-icon bg-danger text-white">
                <FaExclamationTriangle />
              </div>
              <h6 className="text-muted mb-1">Pending Fees</h6>
              <h3>₹{feeSummary.pendingFees.toLocaleString()}</h3>
              <small className="text-danger">
                {feeSummary.partialCount + feeSummary.unpaidCount} students with dues
              </small>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={3} sm={6}>
          <Card className="dashboard-card">
            <Card.Body className="d-flex flex-column align-items-start p-3">
              <h6 className="text-muted mb-3">Fee Status Distribution</h6>
              <div style={{ width: '100%', height: '150px' }}>
                <Pie data={chartData} options={{ maintainAspectRatio: false }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Filters */}
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
                  <option value="">All Departments</option>
                  <option value="CSE">Computer Science (CSE)</option>
                  <option value="ECE">Electronics & Communication (ECE)</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="EEE">Electrical & Electronics (EEE)</option>
                  <option value="IT">Information Technology (IT)</option>
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
                  <option value="">All Years</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
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
                  <option value="">All Statuses</option>
                  <option value="paid">Paid</option>
                  <option value="partial">Partially Paid</option>
                  <option value="unpaid">Unpaid</option>
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
      
      {/* Fee Data Table */}
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
                        onClick={() => handleViewStudent(student)}
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
              <span className="text-muted">Showing {filteredFeeData.length} of {feeData.length} records</span>
            </div>
            <div>
              <Button variant="outline-primary" size="sm" className="me-2">Previous</Button>
              <Button variant="outline-primary" size="sm">Next</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      
      {/* Modals */}
      <UpdateFeeModal />
      <UploadFeeModal />
      <StudentFeeModal />
    </Container>
  );
  
  // Chart data for fee status distribution
  const chartData = {
    labels: ['Paid', 'Partially Paid', 'Unpaid'],
    datasets: [
      {
        data: [feeSummary.paidCount, feeSummary.partialCount, feeSummary.unpaidCount],
        backgroundColor: [
          'rgba(54, 179, 126, 0.7)',
          'rgba(255, 171, 0, 0.7)',
          'rgba(255, 86, 48, 0.7)',
        ],
        borderColor: [
          'rgba(54, 179, 126, 1)',
          'rgba(255, 171, 0, 1)',
          'rgba(255, 86, 48, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const getBadgeVariant = (status) => {
    switch (status) {
      case 'paid': return 'success';
      case 'partial': return 'warning';
      case 'unpaid': return 'danger';
      default: return 'secondary';
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Paid';
      case 'partial': return 'Partially Paid';
      case 'unpaid': return 'Unpaid';
      default: return status;
    }
  };
  
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };
  
  const handleUpdateFee = (e) => {
    e.preventDefault();
    // In a real app, this would update the fee data via an API
    setShowUpdateModal(false);
  };
  
  const handleUploadFile = (e) => {
    e.preventDefault();
    // In a real app, this would upload the file to an API
    setShowUploadModal(false);
  };
  
  // Modal for updating fee details
  const UpdateFeeModal = () => {
    return (
      <Modal 
        show={showUpdateModal} 
        onHide={() => setShowUpdateModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Fee Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdateFee}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Academic Year</Form.Label>
                  <Form.Select required>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Semester</Form.Label>
                  <Form.Select required>
                    <option value="odd">Odd Semester</option>
                    <option value="even">Even Semester</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select required>
                    <option value="">Select Department</option>
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="ECE">Electronics & Communication (ECE)</option>
                    <option value="Mechanical">Mechanical Engineering</option>
                    <option value="Civil">Civil Engineering</option>
                    <option value="EEE">Electrical & Electronics (EEE)</option>
                    <option value="IT">Information Technology (IT)</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Select required>
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            
            <Tabs defaultActiveKey="tuition" id="fee-tabs" className="mb-3">
              <Tab eventKey="tuition" title="Tuition Fee">
                <Form.Group className="mb-3">
                  <Form.Label>Tuition Fee Amount (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="80000" />
                  </InputGroup>
                </Form.Group>
              </Tab>
              
              <Tab eventKey="hostel" title="Hostel Fee">
                <Form.Group className="mb-3">
                  <Form.Label>Hostel Fee Amount (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="45000" />
                  </InputGroup>
                </Form.Group>
              </Tab>
              
              <Tab eventKey="transport" title="Transport Fee">
                <Form.Group className="mb-3">
                  <Form.Label>Transport Fee Amount (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="20000" />
                  </InputGroup>
                </Form.Group>
              </Tab>
              
              <Tab eventKey="other" title="Other Fees">
                <Form.Group className="mb-3">
                  <Form.Label>Examination Fee (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="5000" />
                  </InputGroup>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Library Fee (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="2000" />
                  </InputGroup>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Laboratory Fee (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="3000" />
                  </InputGroup>
                </Form.Group>
              </Tab>
            </Tabs>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Late Fee (₹)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" placeholder="Enter amount" defaultValue="1000" />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="Notify students about the fee update" 
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Update Fee Details
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  };
  
  // Modal for uploading fee data
  const UploadFeeModal = () => {
    return (
      <Modal 
        show={showUploadModal} 
        onHide={() => setShowUploadModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Fee Data</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUploadFile}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Select File</Form.Label>
              <Form.Control type="file" required />
              <Form.Text className="text-muted">
                Upload CSV or Excel file containing fee data.
              </Form.Text>
            </Form.Group>
            
            <div className="bg-light p-3 rounded mb-3">
              <h6 className="mb-2">File Format Requirements:</h6>
              <p className="small mb-2">
                The file should contain the following columns in order:
              </p>
              <p className="small mb-0">
                <strong>Roll Number, Name, Department, Year, Fee Amount, Paid Amount, Due Amount, Due Date, Status</strong>
              </p>
            </div>
            
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="First row contains column headers" 
                defaultChecked 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="Update existing records if Roll Number already exists" 
              />
            </Form.Group>
            
            <div className="d-flex align-items-center">
              <Button variant="outline-secondary" size="sm" className="me-2">
                <FaFileCsv className="me-1" /> Download Template
              </Button>
              <p className="text-muted small mb-0">
                Not sure about the format? Download our template file.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowUploadModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  };
  
  // Modal for viewing student fee details
  const StudentFeeModal = () => {
    if (!selectedStudent) return null;
    
    return (
      <Modal 
        show={showStudentModal} 
        onHide={() => setShowStudentModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Student Fee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <Row>
              <Col md={6}>
                <p><strong>Name:</strong> {selectedStudent.name}</p>
                <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
                <p><strong>Department:</strong> {selectedStudent.department}</p>
                <p><strong>Year:</strong> {selectedStudent.year}</p>
              </Col>
              <Col md={6}>
                <p>
                  <strong>Status:</strong> {' '}
                  <Badge bg={getBadgeVariant(selectedStudent.status)}>
                    {getStatusText(selectedStudent.status)}
                  </Badge>
                </p>
                <p><strong>Total Fee:</strong> ₹{selectedStudent.feeAmount.toLocaleString()}</p>
                <p><strong>Paid Amount:</strong> ₹{selectedStudent.paidAmount.toLocaleString()}</p>
                <p>
                  <strong>Due Amount:</strong> {' '}
                  <span className={selectedStudent.dueAmount > 0 ? 'text-danger' : ''}>
                    ₹{selectedStudent.dueAmount.toLocaleString()}
                  </span>
                </p>
              </Col>
            </Row>
            
            {selectedStudent.dueAmount > 0 && (
              <Alert variant="warning" className="d-flex align-items-center">
                <FaExclamationTriangle className="me-2" size={20} />
                <div>
                  <strong>Payment Due!</strong> Next payment due date: {selectedStudent.dueDate}
                </div>
              </Alert>
            )}
          </div>
          
          <Tabs defaultActiveKey="history" id="student-fee-tabs" className="mb-3">
            <Tab eventKey="history" title="Payment History">
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Receipt No</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStudent.paidAmount > 0 ? (
                    <>
                      <tr>
                        <td>2023-07-15</td>
                        <td>SVIT/2023/1234</td>
                        <td>₹{(selectedStudent.paidAmount / 2).toLocaleString()}</td>
                        <td>Online</td>
                        <td><Badge bg="success">Success</Badge></td>
                      </tr>
                      {selectedStudent.paidAmount === selectedStudent.feeAmount && (
                        <tr>
                          <td>2024-01-10</td>
                          <td>SVIT/2024/5678</td>
                          <td>₹{(selectedStudent.paidAmount / 2).toLocaleString()}</td>
                          <td>Online</td>
                          <td><Badge bg="success">Success</Badge></td>
                        </tr>
                      )}
                    </>
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">No payment records found</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Tab>
            
            <Tab eventKey="breakdown" title="Fee Breakdown">
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Fee Component</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition Fee</td>
                    <td>₹{Math.round(selectedStudent.feeAmount * 0.8).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Examination Fee</td>
                    <td>₹{Math.round(selectedStudent.feeAmount * 0.07).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Laboratory Fee</td>
                    <td>₹{Math.round(selectedStudent.feeAmount * 0.08).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Library Fee</td>
                    <td>₹{Math.round(selectedStudent.feeAmount * 0.03).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Internet & Computer Fee</td>
                    <td>₹{Math.round(selectedStudent.feeAmount * 0.02).toLocaleString()}</td>
                  </tr>
                  <tr className="table-secondary">
                    <th>Total Fee</th>
                    <th>₹{selectedStudent.feeAmount.toLocaleString()}</th>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            
            <Tab eventKey="actions" title="Payment Actions">
              <div className="p-3">
                {selectedStudent.dueAmount > 0 ? (
                  <>
                    <h6>Record New Payment</h6>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Amount (₹)</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>₹</InputGroup.Text>
                            <Form.Control type="number" placeholder="Enter amount" defaultValue={selectedStudent.dueAmount} />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Payment Date</Form.Label>
                          <Form.Control type="date" defaultValue={new Date().toISOString().substr(0, 10)} />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Payment Mode</Form.Label>
                          <Form.Select>
                            <option value="online">Online Payment</option>
                            <option value="cash">Cash</option>
                            <option value="cheque">Cheque</option>
                            <option value="dd">Demand Draft</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Reference Number</Form.Label>
                          <Form.Control type="text" placeholder="Enter reference number" />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Button variant="success">
                        <FaCheck className="me-1" /> Record Payment
                      </Button>
                    </div>
                  </>
                ) : (
                  <Alert variant="success" className="d-flex align-items-center mb-0">
                    <FaCheck className="me-2" size={20} />
                    <div>
                      <strong>All payments completed!</strong> No pending fee for this student.
                    </div>
                  </Alert>
                )}
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" className="me-2">
            <FaDownload className="me-1" /> Download Receipt
          </Button>
          <Button variant="outline-info" className="me-2">
            <FaEnvelope className="me-1" /> Send Reminder
          </Button>
          <Button variant="secondary" onClick={() => setShowStudentModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
}
export default FeeDetails;