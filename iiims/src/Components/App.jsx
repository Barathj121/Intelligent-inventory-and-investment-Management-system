import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import loginImage from '../login_pic.png';
import { Card, Form, Button } from 'react-bootstrap';
import SignupPage from './signup';
import ForgotPassword from './ForgotPasswordPage'; 
import { loginUser } from './apiservice';
import Welcome from './welcome'; // Import the Welcome component
import  Warehousemandash from '../warehousemandash'; // Import the Welcome component

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await loginUser(email, password);
      alert('Login successful: ' + JSON.stringify(response));
      // Redirect to the welcome page after successful login using navigate function
      navigate('/warehouseman');
    } catch (error) {
      alert('There was an error logging in: ' + error);
    }
  };
  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '50%', backgroundColor: '#007BFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={loginImage} alt="Login" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div style={{ flex: '50%', backgroundImage: 'linear-gradient(to right, #a8c0ff, #3f2b96)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: '60%', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)', borderRadius: '15px' }}>
          <Card.Body>
            <h2>Login</h2>
            <p>Access your account:</p>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Link to="/forgot-password" style={{ marginTop: '10px', display: 'block', textDecoration: 'none' }}>
                Forgot your password?
              </Link>
              <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                Log in
              </Button>
            </Form>
            <Link to="/signup" style={{ marginTop: '10px', display: 'block', textDecoration: 'none' }}>
              Sign up
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/welcome" element={<Welcome />} /> Add the new route for the welcome page
      <Route path="/warehouseman" element={<Warehousemandash />} />
    </Routes>
  </Router>
);

export default App;