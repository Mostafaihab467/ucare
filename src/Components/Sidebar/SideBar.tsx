import React, { useState } from 'react';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaBars, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard,MdPersonSearch ,MdOutlineSick  } from "react-icons/md";
import {IoIosStats,IoMdTimer ,IoMdAdd } from 'react-icons/io'
import './SideBar.scss'; // Custom styles for the sidebar
import { useNavigate } from 'react-router-dom';

export default function SideBar() {

  const iconSize = 34;
  const nav = useNavigate()
  const [show, setShow] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setShow(!show);

  return (
    <>
      {/* Toggle Button */}
      <Button
        variant="primary"
        className="sidebar-toggle"
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
        }}
      >
        <FaBars />
      </Button>

      {/* Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={toggleSidebar} className="sidebar" backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='SideBarTitle'>
           <h2>
             UCare
            
            </h2>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column SidBarNav">
          <Nav.Link href="./NewPatient" className="nav-item">
              <IoMdAdd          size={iconSize}  className="me-2" /> New Patient
            </Nav.Link>
            <Nav.Link href="#" className="nav-item">
              <MdDashboard  size={iconSize}  className="me-2" /> Dashboard
            </Nav.Link>
            <Nav.Link href="#" className="nav-item">
              <IoMdTimer  size={iconSize}  className="me-2" /> Appointments
            </Nav.Link>
            <Nav.Link href="#" className="nav-item">
              <MdOutlineSick  size={iconSize}  className="me-2" /> Patients  
            </Nav.Link>
            <Nav.Link href="#" className="nav-item">
              <IoIosStats  size={iconSize}  className="me-2" /> Statstics
            </Nav.Link>
            <Nav.Link href="#" className="nav-item">
              <MdPersonSearch  size={iconSize}  className="me-2" /> Clients
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
