// File: src/components/curriculum/modals/AddCourseModal.js
import React from 'react';
import { Modal, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddCourseModal = ({ show, onHide, departments, years, semesters }) => {
  const handleAddCourse = (e) => {
    e.preventDefault();
    // In a real app, this would add a new course via an API
    onHide();
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Course</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleAddCourse}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Course Code</Form.Label>
                <Form.Control type="text" placeholder="Enter course code" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Course Title</Form.Label>
                <Form.Control type="text" placeholder="Enter course title" required />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select required>
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>{dept.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Select required>
                  <option value="">Select Year</option>
                  {years.map(year => (
                    <option key={year.value} value={year.value}>{year.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Semester</Form.Label>
                <Form.Select required>
                  <option value="">Select Semester</option>
                  {semesters.map(semester => (
                    <option key={semester.value} value={semester.value}>{semester.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Credits</Form.Label>
                <Form.Control type="number" min="1" max="6" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Course Type</Form.Label>
                <Form.Select required>
                  <option value="">Select Type</option>
                  <option value="core">Core Course</option>
                  <option value="elective">Elective</option>
                  <option value="lab">Laboratory</option>
                  <option value="project">Project</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Faculty</Form.Label>
                <Form.Control type="text" placeholder="Enter faculty name" required />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Course Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter course description" required />
          </Form.Group>
          
          <Tabs defaultActiveKey="units" id="course-content-tabs" className="mb-3">
            <Tab eventKey="units" title="Course Units">
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Unit 1</h6>
                  <Button variant="outline-secondary" size="sm">Add Topic</Button>
                </div>
                <Form.Group className="mb-2">
                  <Form.Label>Unit Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter unit title" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Topics (comma separated)</Form.Label>
                  <Form.Control as="textarea" rows={2} placeholder="Enter topics" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Teaching Hours</Form.Label>
                  <Form.Control type="number" min="1" max="20" />
                </Form.Group>
              </div>
              
              <div className="d-grid">
                <Button variant="outline-primary" size="sm">
                  <FaPlus className="me-1" /> Add Another Unit
                </Button>
              </div>
            </Tab>
            
            <Tab eventKey="textbooks" title="Textbooks & References">
              <Form.Group className="mb-3">
                <Form.Label>Textbooks (one per line)</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter textbooks" />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>References (one per line)</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter references" />
              </Form.Group>
            </Tab>
            
            <Tab eventKey="evaluation" title="Evaluation Scheme">
              <h6 className="mb-2">Internal Assessment (Total: 50%)</h6>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Component</Form.Label>
                    <Form.Control type="text" placeholder="Mid Semester Exam" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Weightage (%)</Form.Label>
                    <Form.Control type="number" min="1" max="100" placeholder="30" />
                  </Form.Group>
                </Col>
              </Row>
              
              <h6 className="mb-2">External Assessment (Total: 50%)</h6>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Component</Form.Label>
                    <Form.Control type="text" placeholder="End Semester Exam" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2">
                    <Form.Label>Weightage (%)</Form.Label>
                    <Form.Control type="number" min="1" max="100" placeholder="70" />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            
            <Tab eventKey="outcomes" title="Course Outcomes">
              <Form.Group className="mb-3">
                <Form.Label>Course Outcomes (one per line)</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter course outcomes" />
                <Form.Text className="text-muted">
                  Start each outcome with an action verb (e.g., Understand, Analyze, Design, Implement).
                </Form.Text>
              </Form.Group>
            </Tab>
          </Tabs>
          
          <Form.Group className="mb-3">
            <Form.Label>Upload Syllabus (PDF)</Form.Label>
            <Form.Control type="file" accept=".pdf" />
            <Form.Text className="text-muted">
              Optional. You can upload the complete syllabus document in PDF format.
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Course
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddCourseModal;