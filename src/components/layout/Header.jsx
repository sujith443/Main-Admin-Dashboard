import React, { useState } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';
import { FaBars, FaUserCircle, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [notifications] = useState([
    { id: 1, message: 'New student registration', time: '5 mins ago' },
    { id: 2, message: 'Fee payment deadline tomorrow', time: '1 hour ago' },
    { id: 3, message: 'Staff meeting at 2 PM', time: '3 hours ago' }
  ]);

  const handleLogout = () => {
    logout();
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Navbar className="header">
      <div className="d-flex align-items-center">
        <button className="toggle-sidebar me-3" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <h5 className="mb-0 d-none d-md-block">SVIT Admin Dashboard</h5>
      </div>
      
      <div className="d-flex align-items-center">
        <Dropdown className="me-3">
          <Dropdown.Toggle variant="light" id="notification-dropdown" className="position-relative">
            <FaBell />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {notifications.length}
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu align="end" className="notification-dropdown">
            <Dropdown.Header>Notifications</Dropdown.Header>
            {notifications.map(notification => (
              <Dropdown.Item key={notification.id}>
                <div className="notification-item">
                  <p className="mb-0">{notification.message}</p>
                  <small className="text-muted">{notification.time}</small>
                </div>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item className="text-center">View All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="link" id="user-dropdown" className="p-0 text-dark">
            <div className="user-menu">
              <div className="user-avatar">
                {getInitials(user?.name)}
              </div>
              <span className="d-none d-md-block">{user?.name || 'Administrator'}</span>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu align="end">
            <Dropdown.Item>
              <FaUserCircle className="me-2" /> Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCog className="me-2" /> Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;