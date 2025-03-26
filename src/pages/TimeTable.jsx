// File: src/pages/Timetables.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaUpload, FaDownload } from 'react-icons/fa';

// Import components
import TimetableSelector from '../components/timetable/TimetableSelector';
import TimetableList from '../components/timetable/TimetableList';
import TimetableTemplates from '../components/timetable/TimetableTemplates';
import UploadTimetableModal from '../components/timetable/modals/UploadTimetableModal';
import ViewTimetableModal from '../components/timetable/modals/ViewTimetableModal';

// Import sample data
import { 
  timetableData, 
  availableTimetables,
  departments,
  years,
  sections,
  semesters
} from '../data/timeTableData';

const Timetables = () => {
  // State hooks
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [selectedYear, setSelectedYear] = useState('3');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedSemester, setSelectedSemester] = useState('odd');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  
  // Filter timetables based on selected filters
  const filteredTimetables = availableTimetables.filter(timetable => (
    (selectedDepartment === '' || timetable.department === selectedDepartment) &&
    (selectedYear === '' || timetable.year === selectedYear) &&
    (selectedSemester === '' || timetable.semester === selectedSemester)
  ));
  
  return (
    <Container fluid>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Timetables</h2>
        <Button 
          variant="primary"
          onClick={() => setShowUploadModal(true)}
        >
          <FaUpload className="me-1" /> Upload Timetable
        </Button>
      </div>
      
      {/* Timetable Selector */}
      <TimetableSelector 
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
        departments={departments}
        years={years}
        sections={sections}
        semesters={semesters}
        showViewModal={() => setShowViewModal(true)}
      />
      
      {/* Timetable List */}
      <TimetableList 
        timetables={filteredTimetables}
        setSelectedDepartment={setSelectedDepartment}
        setSelectedYear={setSelectedYear}
        setSelectedSemester={setSelectedSemester}
        showViewModal={() => setShowViewModal(true)}
      />
      
      {/* Timetable Templates */}
      <TimetableTemplates />
      
      {/* Modals */}
      <UploadTimetableModal 
        show={showUploadModal} 
        onHide={() => setShowUploadModal(false)}
        departments={departments}
        years={years}
        sections={sections}
        semesters={semesters}
      />
      
      <ViewTimetableModal 
        show={showViewModal} 
        onHide={() => setShowViewModal(false)}
        timetableData={timetableData}
        selectedDepartment={selectedDepartment}
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
      />
    </Container>
  );
};

export default Timetables;