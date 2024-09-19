import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import './Header.scss';
import { useNavigate } from 'react-router'; 

export default function Header() {
  const nav = useNavigate();

  const SignUp = () => {
    nav('./Login');
  };

  return (
    <div style={{ 
        backgroundColor: 'white', 
        padding: '10px 0', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
      }}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Nav className="align-items-center">
              {/* Left section: Heading */}
              <Nav.Item className="me-3">
                <h2 className="mb-0" style={{ fontWeight: 'bold', color: '#0033cc' }}>Loanup</h2>
              </Nav.Item>
            </Nav>
          </Col>
          
          <Col xs="auto" className="d-flex align-items-center">
            {/* Right section: Text and Button */}
            <span className="me-2" style={{ fontWeight: 'bold', color: '#0033cc' }}>I already have an account</span>
            <Button className="signUpHeader" onClick={SignUp}>Sign Up</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
