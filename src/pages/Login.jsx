// File: src/pages/Login.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // In a real app, you would validate credentials with an API
      // For demo, we'll accept the input with minimal validation
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo credentials check
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        const userData = {
          id: 1,
          name: 'Admin User',
          username: credentials.username,
          role: 'administrator'
        };
        
        login(userData);
        navigate('/');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <h2 className="text-primary">SVIT Admin</h2>
        </div>
        
        <h4 className="login-title">Sign In</h4>
        
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-end mt-2">
              <a href="#forgot-password" className="text-decoration-none small">
                Forgot Password?
              </a>
            </div>
          </Form.Group>
          
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-muted small">
              Contact administrator for account access
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;