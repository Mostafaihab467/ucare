import React from 'react';
import { Container, Card, Header, Input, Grid, Tab, TabPane, Divider, Menu } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';
import Appointment from '../../Components/Appointment/Appointment';
import './NewPatientScreen.scss';
import { FaMicroscope, FaNotesMedical, FaSearch, FaStethoscope } from 'react-icons/fa';
import Diagnoses from '../../Components/Diagnoses/Diagnoses';

export default function NewPatientScreen() {

  
  return (
    <div className='NewPatientSeceen'>
      <Container>
        <Row className="my-8">
          {/* First Column */}
          <Col md={4}>
            <Appointment />
          </Col>

          {/* Second Column */}
          <Diagnoses/>

          {/* Third Column (You can add additional content here if needed) */}
        </Row>
      </Container>
    </div>
  );
}
