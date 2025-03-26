// File: src/components/curriculum/AcademicCalendarTab.js
import React, { useState } from 'react';
import { Card, Form, Button, Table, Tabs, Tab } from 'react-bootstrap';
import { FaFileUpload, FaEdit, FaDownload } from 'react-icons/fa';

// Import data
import { calendarData } from '../../data/curriculumData';

const AcademicCalendarTab = () => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">Academic Calendar</h5>
          <div>
            <Button variant="outline-primary" className="me-2">
              <FaFileUpload className="me-1" /> Upload Calendar
            </Button>
            <Button variant="primary">
              <FaEdit className="me-1" /> Create Calendar
            </Button>
          </div>
        </div>
        
        <Form.Group className="mb-4 w-25">
          <Form.Label>Academic Year</Form.Label>
          <Form.Select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
          </Form.Select>
        </Form.Group>
        
        <Tabs defaultActiveKey="odd" id="calendar-tabs" className="mb-3">
          <Tab eventKey="odd" title="Odd Semester">
            <div className="table-responsive">
              <CalendarTable events={calendarData.oddSemester} />
            </div>
          </Tab>
          <Tab eventKey="even" title="Even Semester">
            <div className="table-responsive">
              <CalendarTable events={calendarData.evenSemester} />
            </div>
          </Tab>
        </Tabs>
        
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-primary">
            <FaDownload className="me-1" /> Download Calendar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// Helper component for calendar table
const CalendarTable = ({ events }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Event</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Duration</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{event.event}</td>
            <td>{event.startDate}</td>
            <td>{event.endDate}</td>
            <td>{event.duration}</td>
            <td>{event.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AcademicCalendarTab;