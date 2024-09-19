import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Screens/Login';
import Header from './Components/Header/Hader';
import 'semantic-ui-css/semantic.min.css'




export default function MainApp() {
  return (
    <div>
      dasdasdsd

      <BrowserRouter>
      <Header/>


        <Routes>
          <Route path='/Login' index element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
