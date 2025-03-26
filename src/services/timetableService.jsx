// File: src/services/timetableService.js

// This file would contain API calls to the backend in a real application
// For now, it simulates API calls with mock data and timeouts

import { timetableData, availableTimetables } from '../data/timeTableData';

/**
 * Get timetable by ID
 */
export const getTimetableById = async (id) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // For this mock service, we'll always return the same timetable data
      resolve(timetableData);
    }, 500);
  });
};

/**
 * Get timetable by department, year, and semester
 */
export const getTimetableByParams = async (department, year, semester) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // For this mock service, we'll always return the same timetable data
      resolve(timetableData);
    }, 500);
  });
};

/**
 * Get all available timetables
 */
export const getAvailableTimetables = async () => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(availableTimetables);
    }, 300);
  });
};

/**
 * Upload a new timetable
 */
export const uploadTimetable = async (formData) => {
  // In a real app, this would be an API call to upload a file
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Uploading timetable:', formData);
      resolve({ success: true, message: 'Timetable uploaded successfully' });
    }, 1000);
  });
};

/**
 * Update an existing timetable
 */
export const updateTimetable = async (id, timetableData) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Updating timetable:', id, timetableData);
      resolve({ success: true, message: 'Timetable updated successfully' });
    }, 800);
  });
};

/**
 * Delete a timetable
 */
export const deleteTimetable = async (id) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Deleting timetable:', id);
      resolve({ success: true, message: 'Timetable deleted successfully' });
    }, 600);
  });
};

/**
 * Download a timetable template
 */
export const downloadTimetableTemplate = async (templateType) => {
  // In a real app, this would be an API call to download a file
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Downloading template:', templateType);
      resolve({ success: true, message: 'Template downloaded successfully' });
    }, 500);
  });
};

/**
 * Download a timetable
 */
export const downloadTimetable = async (id, format = 'pdf') => {
  // In a real app, this would be an API call to download a file
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Downloading timetable:', id, format);
      resolve({ success: true, message: 'Timetable downloaded successfully' });
    }, 700);
  });
};