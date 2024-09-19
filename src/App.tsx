import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './MainApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
     
      <MainApp/>
      <ToastContainer position='bottom-right' />
    </div>
  );
}

export default App;
