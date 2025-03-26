// File: src/components/fee/FeeSummary.jsx
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { 
  FaMoneyBillWave, 
  FaCheck, 
  FaExclamationTriangle 
} from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const FeeSummary = ({ feeSummary }) => {
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

  return (
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
              {feeSummary.partialCount + feeSummary.unpaidCount}
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
  );
};

export default FeeSummary;