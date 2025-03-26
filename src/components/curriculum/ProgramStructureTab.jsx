// File: src/components/curriculum/ProgramStructureTab.js
import React from 'react';
import { Card, Accordion, Badge, Table, Button, Tabs, Tab } from 'react-bootstrap';
import { FaDownload, FaEdit, FaArrowRight } from 'react-icons/fa';

// Import data
import { programStructureData } from '../../data/curriculumData';

const ProgramStructureTab = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Program Structure</h5>
          <div>
            <Button variant="outline-primary" className="me-2">
              <FaDownload className="me-1" /> Download
            </Button>
            <Button variant="primary">
              <FaEdit className="me-1" /> Edit Structure
            </Button>
          </div>
        </div>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <span className="me-2">Year 1</span>
                <Badge bg="primary">Semester 1 & 2</Badge>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <Tabs defaultActiveKey="sem1" id="year1-tabs" className="mb-3">
                <Tab eventKey="sem1" title="Semester 1 (Odd)">
                  <SemesterTable courses={programStructureData.year1.semester1} />
                </Tab>
                <Tab eventKey="sem2" title="Semester 2 (Even)">
                  <SemesterTable courses={programStructureData.year1.semester2} />
                </Tab>
              </Tabs>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <span className="me-2">Year 2</span>
                <Badge bg="primary">Semester 3 & 4</Badge>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <Tabs defaultActiveKey="sem3" id="year2-tabs" className="mb-3">
                <Tab eventKey="sem3" title="Semester 3 (Odd)">
                  <SemesterTable courses={programStructureData.year2.semester3} />
                </Tab>
                <Tab eventKey="sem4" title="Semester 4 (Even)">
                  <SemesterTable courses={programStructureData.year2.semester4} />
                </Tab>
              </Tabs>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <span className="me-2">Year 3</span>
                <Badge bg="primary">Semester 5 & 6</Badge>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="text-center py-3">
                <p>Content for Year 3 curriculum would be displayed here.</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="d-flex align-items-center">
                <span className="me-2">Year 4</span>
                <Badge bg="primary">Semester 7 & 8</Badge>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="text-center py-3">
                <p>Content for Year 4 curriculum would be displayed here.</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

// Helper component for semester tables
const SemesterTable = ({ courses }) => {
  // Calculate total credits and hours
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const totalHours = courses.reduce((sum, course) => sum + course.hoursPerWeek, 0);

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>Credits</th>
          <th>Type</th>
          <th>Hours/Week</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.code}</td>
            <td>{course.title}</td>
            <td>{course.credits}</td>
            <td>
              <Badge bg={course.type === 'Core' ? 'danger' : course.type === 'Lab' ? 'info' : 'warning'}>
                {course.type}
              </Badge>
            </td>
            <td>{course.hoursPerWeek}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="table-secondary">
          <th colSpan="2">Total</th>
          <th>{totalCredits}</th>
          <th></th>
          <th>{totalHours}</th>
        </tr>
      </tfoot>
    </Table>
  );
};

export default ProgramStructureTab;