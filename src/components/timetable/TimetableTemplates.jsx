// File: src/components/timetable/TimetableTemplates.js
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FaFilePdf, FaFileExcel, FaFileImage, FaDownload } from 'react-icons/fa';

// Import template data
import { templateTypes } from '../../data/timeTableData';

const TimetableTemplates = () => {
  // Function to get the correct icon component
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FaFilePdf':
        return <FaFilePdf className="fs-1 text-danger mb-3" />;
      case 'FaFileExcel':
        return <FaFileExcel className="fs-1 text-success mb-3" />;
      case 'FaFileImage':
        return <FaFileImage className="fs-1 text-primary mb-3" />;
      default:
        return <FaFilePdf className="fs-1 text-danger mb-3" />;
    }
  };

  return (
    <Row className="mt-4">
      <Col lg={12}>
        <Card>
          <Card.Header className="bg-white">
            <h5 className="mb-0">Timetable Templates</h5>
          </Card.Header>
          <Card.Body>
            <p className="text-muted mb-4">
              Need help creating timetables? Use our pre-designed templates to quickly create and customize timetables for different departments and years.
            </p>
            <Row className="g-4">
              {templateTypes.map((template) => (
                <Col md={4} key={template.id}>
                  <Card className="h-100 border">
                    <Card.Body className="text-center">
                      {getIconComponent(template.icon)}
                      <h5>{template.title}</h5>
                      <p className="text-muted">{template.description}</p>
                      <Button variant="outline-primary" size="sm">
                        <FaDownload className="me-1" /> Download
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TimetableTemplates;