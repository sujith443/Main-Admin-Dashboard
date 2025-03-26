// File: src/components/dashboard/RecentActivities.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { 
  FaUserPlus, 
  FaFileUpload, 
  FaMoneyBillWave, 
  FaCalendarCheck, 
  FaEdit 
} from 'react-icons/fa';

const RecentActivities = () => {
  // Sample data - in a real app, this would come from an API
  const activities = [
    {
      id: 1,
      icon: <FaUserPlus className="text-primary" />,
      title: 'New student registered',
      description: 'Rahul Kumar was added to CSE department',
      time: '10 minutes ago',
    },
    {
      id: 2,
      icon: <FaFileUpload className="text-success" />,
      title: 'Timetable updated',
      description: 'ECE 3rd year timetable was modified',
      time: '1 hour ago',
    },
    {
      id: 3,
      icon: <FaMoneyBillWave className="text-warning" />,
      title: 'Fee payment received',
      description: '₹45,000 received from Priya Sharma',
      time: '3 hours ago',
    },
    {
      id: 4,
      icon: <FaCalendarCheck className="text-info" />,
      title: 'Attendance updated',
      description: 'IT Department, Batch 2023',
      time: '5 hours ago',
    },
    {
      id: 5,
      icon: <FaEdit className="text-secondary" />,
      title: 'Curriculum modified',
      description: 'Machine Learning syllabus updated',
      time: 'Yesterday',
    },
  ];

  return (
    <ListGroup variant="flush">
      {activities.map((activity) => (
        <ListGroup.Item key={activity.id} className="px-0 py-3 border-bottom">
          <div className="d-flex">
            <div className="me-3 fs-4">
              {activity.icon}
            </div>
            <div className="flex-grow-1">
              <h6 className="mb-1">{activity.title}</h6>
              <p className="text-muted mb-0 small">{activity.description}</p>
              <small className="text-muted">{activity.time}</small>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RecentActivities;