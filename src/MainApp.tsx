import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Screens/Auth/Login/Login';
import Header from './Components/Header/Hader';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './Screens/DashBoard/Dashboard';
import SideBar from './Components/Sidebar/SideBar';
import NewPatientScreen from './Screens/NewPatient/NewPatientScreen';




export default function MainApp() {
  return (
    <div>
      

      <BrowserRouter>
      <Header/>
      <SideBar/>

        <Routes>
          <Route path='/Login' index element={<Login/>} />
          <Route path='/Dashboard' index element={<Dashboard/>} />
          <Route path='/NewPatient' index element={<NewPatientScreen/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}
