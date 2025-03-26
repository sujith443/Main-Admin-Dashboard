// File: src/services/curriculumService.js

// This file would contain API calls to the backend in a real application
// For now, it simulates API calls with mock data and timeouts

import { 
    coursesData, 
    programStructureData, 
    regulationsData, 
    calendarData 
  } from '../data/curriculumData';
  
  /**
   * Get courses by department, year, and semester
   */
  export const getCourses = async (department, year, semester) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredCourses = coursesData.filter(course => (
          (department === '' || course.department === department) &&
          (year === '' || course.year === parseInt(year)) &&
          (semester === '' || course.semester === semester)
        ));
        resolve(filteredCourses);
      }, 500);
    });
  };
  
  /**
   * Get course by ID
   */
  export const getCourseById = async (id) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const course = coursesData.find(c => c.id === id);
        resolve(course);
      }, 300);
    });
  };
  
  /**
   * Create new course
   */
  export const createCourse = async (courseData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Creating course:', courseData);
        resolve({ success: true, message: 'Course created successfully' });
      }, 800);
    });
  };
  
  /**
   * Update course
   */
  export const updateCourse = async (id, courseData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Updating course:', id, courseData);
        resolve({ success: true, message: 'Course updated successfully' });
      }, 700);
    });
  };
  
  /**
   * Delete course
   */
  export const deleteCourse = async (id) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Deleting course:', id);
        resolve({ success: true, message: 'Course deleted successfully' });
      }, 600);
    });
  };
  
  /**
   * Upload syllabus document
   */
  export const uploadSyllabus = async (formData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Uploading syllabus:', formData);
        resolve({ success: true, message: 'Syllabus uploaded successfully' });
      }, 1000);
    });
  };
  
  /**
   * Get academic regulations
   */
  export const getRegulations = async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(regulationsData);
      }, 500);
    });
  };
  
  /**
   * Get specific regulation by ID
   */
  export const getRegulationById = async (id) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const regulation = regulationsData.find(r => r.id === id);
        resolve(regulation);
      }, 300);
    });
  };
  
  /**
   * Upload regulation document
   */
  export const uploadRegulation = async (formData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Uploading regulation:', formData);
        resolve({ success: true, message: 'Regulation uploaded successfully' });
      }, 900);
    });
  };
  
  /**
   * Get academic calendar
   */
  export const getAcademicCalendar = async (academicYear) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(calendarData);
      }, 400);
    });
  };
  
  /**
   * Update academic calendar
   */
  export const updateAcademicCalendar = async (academicYear, calendarData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Updating calendar for year:', academicYear, calendarData);
        resolve({ success: true, message: 'Academic calendar updated successfully' });
      }, 800);
    });
  };
  
  /**
   * Get program structure
   */
  export const getProgramStructure = async () => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(programStructureData);
      }, 500);
    });
  };
  
  /**
   * Update program structure
   */
  export const updateProgramStructure = async (structureData) => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Updating program structure:', structureData);
        resolve({ success: true, message: 'Program structure updated successfully' });
      }, 1000);
    });
  };
  
  /**
   * Download document (syllabus, regulation, calendar)
   */
  export const downloadDocument = async (id, type) => {
    // In a real app, this would be an API call to download a file
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Downloading document:', id, type);
        resolve({ success: true, message: 'Document downloaded successfully' });
      }, 700);
    });
  };