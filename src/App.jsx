// File: src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import Dashboard from './pages/Dashboard';
import StudentData from './pages/StudentData';
import Timetables from './pages/TimeTable';
import FeeDetails from './pages/FeeDetails';
import Curriculum from './pages/Curriculum';
import Attendance from './pages/Attendance';
import Login from './pages/Login';

// Auth Context
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function MainApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isAuthenticated } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && (
          <>
            <Sidebar isOpen={sidebarOpen} />
            <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'sidebar-collapsed'}`}>
              <Header toggleSidebar={toggleSidebar} />
              <div className="content-container">
                <Routes>
                  <Route path="/" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/students" element={
                    <ProtectedRoute>
                      <StudentData />
                    </ProtectedRoute>
                  } />
                  <Route path="/timetables" element={
                    <ProtectedRoute>
                      <Timetables />
                    </ProtectedRoute>
                  } />
                  <Route path="/fees" element={
                    <ProtectedRoute>
                      <FeeDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/curriculum" element={
                    <ProtectedRoute>
                      <Curriculum />
                    </ProtectedRoute>
                  } />
                  <Route path="/attendance" element={
                    <ProtectedRoute>
                      <Attendance />
                    </ProtectedRoute>
                  } />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </>
        )}
        {!isAuthenticated && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;