// File: src/components/fee/FeeHeader.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaUpload, FaEdit } from 'react-icons/fa';

const FeeHeader = ({ onUpload, onUpdate }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Fee Details</h2>
      <div>
        <Button 
          variant="outline-primary" 
          className="me-2"
          onClick={onUpload}
        >
          <FaUpload className="me-1" /> Upload Fee Data
        </Button>
        <Button 
          variant="primary"
          onClick={onUpdate}
        >
          <FaEdit className="me-1" /> Update Fee Details
        </Button>
      </div>
    </div>
  );
};

export default FeeHeader;