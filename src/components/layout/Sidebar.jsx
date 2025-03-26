import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaUserGraduate, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaBook, 
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaQuestionCircle
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          {isOpen ? 'SVIT Admin' : 'SVIT'}
        </div>
      </div>
      
      <div className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <NavLink to="/" className="sidebar-link">
              <span className="sidebar-icon"><FaHome /></span>
              <span className="sidebar-text">Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/students" className="sidebar-link">
              <span className="sidebar-icon"><FaUserGraduate /></span>
              <span className="sidebar-text">Student Data</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/timetables" className="sidebar-link">
              <span className="sidebar-icon"><FaCalendarAlt /></span>
              <span className="sidebar-text">Timetables</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/fees" className="sidebar-link">
              <span className="sidebar-icon"><FaMoneyBillWave /></span>
              <span className="sidebar-text">Fee Details</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/curriculum" className="sidebar-link">
              <span className="sidebar-icon"><FaBook /></span>
              <span className="sidebar-text">Curriculum</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/attendance" className="sidebar-link">
              <span className="sidebar-icon"><FaClipboardList /></span>
              <span className="sidebar-text">Attendance</span>
            </NavLink>
          </li>
          
          <li className="sidebar-item mt-4">
            <NavLink to="/reports" className="sidebar-link">
              <span className="sidebar-icon"><FaChartBar /></span>
              <span className="sidebar-text">Reports</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/settings" className="sidebar-link">
              <span className="sidebar-icon"><FaCog /></span>
              <span className="sidebar-text">Settings</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/help" className="sidebar-link">
              <span className="sidebar-icon"><FaQuestionCircle /></span>
              <span className="sidebar-text">Help & Support</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;