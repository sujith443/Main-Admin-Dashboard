// File: src/components/curriculum/modals/ViewCourseModal.js
import React from 'react';
import { Modal, Button, Row, Col, Badge, Card, Tabs, Tab, Accordion, ListGroup, Table } from 'react-bootstrap';
import { FaDownload, FaEdit, FaBook, FaBookOpen } from 'react-icons/fa';

const ViewCourseModal = ({ show, onHide, course }) => {
  if (!course) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>{course.code}: {course.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-4">
          <Col md={8}>
            <p className="mb-2">{course.description}</p>
            <div className="d-flex flex-wrap">
              <Badge bg="primary" className="me-2 mb-2">
                {course.department}
              </Badge>
              <Badge bg="secondary" className="me-2 mb-2">
                {course.year}rd Year
              </Badge>
              <Badge bg="info" className="me-2 mb-2">
                {course.semester === 'odd' ? 'Odd' : 'Even'} Semester
              </Badge>
              <Badge bg="success" className="me-2 mb-2">
                {course.credits} Credits
              </Badge>
              <Badge bg={course.type === 'core' ? 'danger' : 'warning'} className="me-2 mb-2">
                {course.type === 'core' ? 'Core Course' : 'Elective'}
              </Badge>
            </div>
          </Col>
          <Col md={4}>
            <Card className="bg-light">
              <Card.Body className="p-3">
                <p className="mb-1"><strong>Faculty:</strong> {course.faculty}</p>
                <p className="mb-1"><strong>Course Code:</strong> {course.code}</p>
                <p className="mb-0"><strong>Contact Hours:</strong> {course.units.reduce((acc, unit) => acc + unit.hours, 0)}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Tabs defaultActiveKey="syllabus" id="course-view-tabs" className="mb-3">
          <Tab eventKey="syllabus" title="Syllabus">
            <h5 className="mb-3">Course Content</h5>
            <Accordion defaultActiveKey="0">
              {course.units.map((unit, index) => (
                <Accordion.Item key={index} eventKey={String(index)}>
                  <Accordion.Header>
                    <div className="d-flex justify-content-between align-items-center w-100 me-3">
                      <span>Unit {index + 1}: {unit.title}</span>
                      <Badge bg="secondary" className="me-3">{unit.hours} Hours</Badge>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>Topics:</strong>
                    <ul className="mb-0">
                      {unit.topics.map((topic, tIndex) => (
                        <li key={tIndex}>{topic}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            
            <Row className="mt-4">
              <Col md={6}>
                <h5 className="mb-3">Textbooks</h5>
                <ListGroup variant="flush">
                  {course.textbooks.map((book, index) => (
                    <ListGroup.Item key={index} className="px-0">
                      <FaBook className="me-2 text-primary" /> {book}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <h5 className="mb-3">References</h5>
                <ListGroup variant="flush">
                  {course.references.map((ref, index) => (
                    <ListGroup.Item key={index} className="px-0">
                      <FaBookOpen className="me-2 text-secondary" /> {ref}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Tab>
          
          <Tab eventKey="evaluation" title="Evaluation Scheme">
            <Row>
              <Col md={6}>
                <h5 className="mb-3">Internal Assessment</h5>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Weightage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.evaluationScheme.internal.map((comp, index) => (
                      <tr key={index}>
                        <td>{comp.component}</td>
                        <td>{comp.weightage}%</td>
                      </tr>
                    ))}
                    <tr className="table-secondary">
                      <th>Total</th>
                      <th>
                        {course.evaluationScheme.internal.reduce((acc, comp) => acc + comp.weightage, 0)}%
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={6}>
                <h5 className="mb-3">External Assessment</h5>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Weightage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.evaluationScheme.external.map((comp, index) => (
                      <tr key={index}>
                        <td>{comp.component}</td>
                        <td>{comp.weightage}%</td>
                      </tr>
                    ))}
                    <tr className="table-secondary">
                      <th>Total</th>
                      <th>
                        {course.evaluationScheme.external.reduce((acc, comp) => acc + comp.weightage, 0)}%
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Tab>
          
          <Tab eventKey="outcomes" title="Course Outcomes">
            <h5 className="mb-3">Course Outcomes</h5>
            <ListGroup variant="flush">
              {course.outcomes.map((outcome, index) => (
                <ListGroup.Item key={index} className="px-0">
                  <div className="d-flex">
                    <div className="me-3">
                      <Badge bg="primary">{`CO${index + 1}`}</Badge>
                    </div>
                    <div>{outcome}</div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" className="me-2">
          <FaDownload className="me-1" /> Download Syllabus
        </Button>
        <Button variant="outline-success" className="me-2">
          <FaEdit className="me-1" /> Edit
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewCourseModal;