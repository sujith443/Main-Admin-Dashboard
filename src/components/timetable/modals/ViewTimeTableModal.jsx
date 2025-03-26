// File: src/components/timetable/modals/ViewTimetableModal.js
import React from 'react';
import { Modal, Button, Table, Badge } from 'react-bootstrap';
import { FaDownload, FaEdit } from 'react-icons/fa';

const ViewTimetableModal = ({ 
  show, 
  onHide, 
  timetableData,
  selectedDepartment,
  selectedYear,
  selectedSemester
}) => {
  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedDepartment} - {selectedYear}rd Year - {selectedSemester === 'odd' ? 'Odd' : 'Even'} Semester Timetable
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive">
          <Table bordered className="timetable-table">
            <thead>
              <tr className="bg-light">
                <th style={{ width: '15%' }}>Time / Day</th>
                {timetableData.map((day, index) => (
                  <th key={index}>{day.day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetableData[0].periods.map((period, periodIndex) => (
                <tr key={periodIndex}>
                  <td className="bg-light fw-bold">{period.time}</td>
                  {timetableData.map((day, dayIndex) => {
                    const currentPeriod = day.periods[periodIndex];
                    return (
                      <td key={dayIndex} className={currentPeriod.subject === 'Lunch Break' ? 'bg-light text-center' : ''}>
                        {currentPeriod.subject}<br />
                        {currentPeriod.subject !== 'Lunch Break' && currentPeriod.faculty && (
                          <small className="text-muted">{currentPeriod.faculty}</small>
                        )}
                        {currentPeriod.subject !== 'Lunch Break' && currentPeriod.room && (
                          <div><small className="text-primary">{currentPeriod.room}</small></div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-primary" size="sm" className="me-2">
            <FaDownload className="me-1" /> Download PDF
          </Button>
          <Button variant="outline-success" size="sm">
            <FaEdit className="me-1" /> Edit
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewTimetableModal;