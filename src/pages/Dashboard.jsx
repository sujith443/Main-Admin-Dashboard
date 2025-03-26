// File: src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBook,
  FaClipboardList,
  FaChartLine,
  FaExclamationTriangle,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
// These components will be created next
import DashboardChart from "../components/dashboard/DashboardChart";
import RecentActivities from "../components/dashboard/RecentActivities";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";

const Dashboard = () => {
  // These would typically come from an API
  const stats = {
    totalStudents: 1250,
    attendanceRate: 92,
    feePending: 450000,
    coursesActive: 48,
  };

  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <div>
          <span className="text-muted me-2">Academic Year:</span>
          <strong>2024-2025</strong>
        </div>
      </div>

      {/* Quick Stats */}
      <Row className="g-4 mb-4">
        <Col lg={3} sm={6}>
          <Card className="dashboard-card">
            <Card.Body className="d-flex flex-column align-items-start">
              <div className="card-icon bg-primary text-white">
                <FaUserGraduate />
              </div>
              <h6 className="text-muted mb-1">Total Students</h6>
              <h3>{stats.totalStudents}</h3>
              <small className="text-success">
                <FaChartLine className="me-1" />
                <span>12% increase from last year</span>
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Announcements */}
      <Row className="mb-4">
        <Col>
          <Alert variant="info" className="d-flex align-items-center">
            <FaBullhorn className="me-2 fs-4" />
            <div>
              <strong>Important Notice:</strong> Mid-term exams scheduled from
              April 15th to April 25th. Make sure all departments are prepared.
            </div>
          </Alert>
        </Col>
      </Row>

    {/* Charts & Recent Activities */}
      <Row className="g-4 mb-4">
        <Col lg={8}>
          <Card className="h-100">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Student Performance Overview</h5>
            </Card.Header>
            <Card.Body>
              <DashboardChart />
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="h-100">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Recent Activities</h5>
              <Link to="/activities" className="text-decoration-none small">
                View All <FaArrowRight className="ms-1" />
              </Link>
            </Card.Header>
            <Card.Body>
              <RecentActivities />
            </Card.Body>
          </Card>
        </Col>
      </Row>

        
      {/* Quick Access & Upcoming Events */}
      <Row className="g-4">
        <Col lg={5}>
          <Card>
            <Card.Header className="bg-white">
              <h5 className="mb-0">Quick Access</h5>
            </Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col xs={6}>
                  <Link to="/students" className="text-decoration-none">
                    <Card className="text-center p-3 h-100">
                      <FaUserGraduate className="fs-1 mx-auto mb-2 text-primary" />
                      <Card.Title className="fs-6">Student Data</Card.Title>
                    </Card>
                  </Link>
                </Col>
                <Col xs={6}>
                  <Link to="/timetables" className="text-decoration-none">
                    <Card className="text-center p-3 h-100">
                      <FaCalendarAlt className="fs-1 mx-auto mb-2 text-success" />
                      <Card.Title className="fs-6">Timetables</Card.Title>
                    </Card>
                  </Link>
                </Col>
                <Col xs={6}>
                  <Link to="/fees" className="text-decoration-none">
                    <Card className="text-center p-3 h-100">
                      <FaMoneyBillWave className="fs-1 mx-auto mb-2 text-warning" />
                      <Card.Title className="fs-6">Fee Details</Card.Title>
                    </Card>
                  </Link>
                </Col>
                <Col xs={6}>
                  <Link to="/attendance" className="text-decoration-none">
                    <Card className="text-center p-3 h-100">
                      <FaClipboardList className="fs-1 mx-auto mb-2 text-info" />
                      <Card.Title className="fs-6">Attendance</Card.Title>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={7}>
          <Card>
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Upcoming Events</h5>
              <Link to="/events" className="text-decoration-none small">
                View Calendar <FaArrowRight className="ms-1" />
              </Link>
            </Card.Header>
            <Card.Body>
              <UpcomingEvents />
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Container>
  );
};

export default Dashboard;
