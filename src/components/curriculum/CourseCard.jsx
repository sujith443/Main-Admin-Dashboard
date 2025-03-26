// File: src/components/curriculum/CourseCard.js
import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const CourseCard = ({ course, handleViewCourse }) => {
  return (
    <Card className="h-100">
      <Card.Header className="bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{course.code}: {course.title}</h5>
        <Badge bg={course.type === 'core' ? 'danger' : 'warning'}>
          {course.type === 'core' ? 'Core' : 'Elective'}
        </Badge>
      </Card.Header>
      <Card.Body>
        <p className="card-text mb-3">{course.description}</p>
        <div className="d-flex mb-3">
          <div className="me-3">
            <small className="d-block text-muted">Credits</small>
            <strong>{course.credits}</strong>
          </div>
          <div className="me-3">
            <small className="d-block text-muted">Faculty</small>
            <strong>{course.faculty}</strong>
          </div>
          <div>
            <small className="d-block text-muted">Contact Hours</small>
            <strong>{course.units.reduce((acc, unit) => acc + unit.hours, 0)}</strong>
          </div>
        </div>
        <div className="d-flex">
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => handleViewCourse(course)}
          >
            <FaEye className="me-1" /> View
          </Button>
          <Button variant="outline-success" className="me-2">
            <FaEdit className="me-1" /> Edit
          </Button>
          <Button variant="outline-danger">
            <FaTrashAlt className="me-1" /> Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;