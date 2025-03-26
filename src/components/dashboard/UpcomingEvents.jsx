// File: src/components/dashboard/UpcomingEvents.js
import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaCalendarDay, 
  FaBook, 
  FaBullhorn 
} from 'react-icons/fa';

const UpcomingEvents = () => {
  // Sample data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      icon: <FaCalendarDay className="text-danger" />,
      title: 'Mid-Term Examinations',
      date: 'April 15-25, 2024',
      type: 'exam',
    },
    {
      id: 2,
      icon: <FaUsers className="text-primary" />,
      title: 'Faculty Development Program',
      date: 'April 5, 2024',
      type: 'meeting',
    },
    {
      id: 3,
      icon: <FaGraduationCap className="text-success" />,
      title: 'Annual Technical Symposium',
      date: 'April 10, 2024',
      type: 'event',
    },
    {
      id: 4,
      icon: <FaBullhorn className="text-warning" />,
      title: 'Parent-Teacher Meeting',
      date: 'April 30, 2024',
      type: 'meeting',
    },
    {
      id: 5,
      icon: <FaBook className="text-info" />,
      title: 'Workshop on AI & ML',
      date: 'May 5, 2024',
      type: 'workshop',
    },
  ];

  const getBadgeVariant = (type) => {
    switch (type) {
      case 'exam': return 'danger';
      case 'meeting': return 'primary';
      case 'event': return 'success';
      case 'workshop': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <ListGroup variant="flush">
      {events.map((event) => (
        <ListGroup.Item key={event.id} className="px-0 py-3 border-bottom">
          <div className="d-flex align-items-center">
            <div className="me-3 fs-4">
              {event.icon}
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">{event.title}</h6>
                <Badge bg={getBadgeVariant(event.type)}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </Badge>
              </div>
              <small className="text-muted">{event.date}</small>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UpcomingEvents;