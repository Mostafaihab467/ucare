import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";




export default function MainApp() {
  return (
    <div>
      dasdasdsd

      <BrowserRouter>
        <Routes>
          <Route path='/Login' index element={<div>xxx</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
