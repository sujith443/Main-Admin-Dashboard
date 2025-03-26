// File: src/components/attendance/index.js
// This file exports all attendance components for easier imports

// Main components
export { default as MarkAttendance } from './MarkAttendance';
export { default as ViewAttendance } from './ViewAttendance';
export { default as AttendanceAnalytics } from './AttendanceAnalytics';
export { default as ShortageAlerts } from './ShortageAlerts';
export { default as ClassSelectionForm } from './ClassSelectionForm';
export { default as ReportGenerator } from './ReportGenerator';

// Modals
export { default as UploadAttendanceModal } from './modals/UploadAttendanceModal';
export { default as BulkUpdateModal } from './modals/BulkUpdateModal';
export { default as StudentReportModal } from './modals/StudentReportModal';