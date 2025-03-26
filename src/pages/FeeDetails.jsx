// File: src/pages/FeeDetails.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeeHeader from '../components/fee/FeeHeader';
import FeeSummary from '../components/fee/FeeSummary';
import FeeFilters from '../components/fee/FeeFilters';
import FeeTable from '../components/fee/FeeTable';
import UpdateFeeModal from '../components/fee/UpdateFeeModal';
import UploadFeeModal from '../components/fee/UploadFeeModal';
import StudentFeeModal from '../components/fee/StudentFeeModal';
import { feeData as initialFeeData } from '../data/feeData';

const FeeDetails = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [feeData, setFeeData] = useState(initialFeeData);
  
  // Filter and search fee data
  const filteredFeeData = feeData.filter(student => {
    return (
      (filterDepartment === '' || student.department === filterDepartment) &&
      (filterYear === '' || student.year === parseInt(filterYear)) &&
      (filterStatus === '' || student.status === filterStatus) &&
      (searchTerm === '' || 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  
  // Summary stats
  const feeSummary = {
    totalFees: feeData.reduce((sum, student) => sum + student.feeAmount, 0),
    collectedFees: feeData.reduce((sum, student) => sum + student.paidAmount, 0),
    pendingFees: feeData.reduce((sum, student) => sum + student.dueAmount, 0),
    paidCount: feeData.filter(student => student.status === 'paid').length,
    partialCount: feeData.filter(student => student.status === 'partial').length,
    unpaidCount: feeData.filter(student => student.status === 'unpaid').length
  };
  
  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };
  
  const handleUpdateFee = (e) => {
    e.preventDefault();
    // In a real app, this would update the fee data via an API
    setShowUpdateModal(false);
  };
  
  const handleUploadFile = (e) => {
    e.preventDefault();
    // In a real app, this would upload the file to an API
    setShowUploadModal(false);
  };
  
  return (
    <Container fluid>
      <FeeHeader 
        onUpload={() => setShowUploadModal(true)}
        onUpdate={() => setShowUpdateModal(true)}
      />
      
      <FeeSummary feeSummary={feeSummary} />
      
      <FeeFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      
      <FeeTable 
        filteredFeeData={filteredFeeData}
        totalRecords={feeData.length}
        onViewStudent={handleViewStudent}
      />
      
      {showUpdateModal && (
        <UpdateFeeModal 
          show={showUpdateModal}
          onHide={() => setShowUpdateModal(false)}
          onSubmit={handleUpdateFee}
        />
      )}
      
      {showUploadModal && (
        <UploadFeeModal 
          show={showUploadModal}
          onHide={() => setShowUploadModal(false)}
          onSubmit={handleUploadFile}
        />
      )}
      
      {showStudentModal && selectedStudent && (
        <StudentFeeModal 
          show={showStudentModal}
          onHide={() => setShowStudentModal(false)}
          student={selectedStudent}
        />
      )}
    </Container>
  );
};

export default FeeDetails;