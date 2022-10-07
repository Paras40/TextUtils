import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';

const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }

  const closeAlert = () => {
    setAlert(null);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem('mode', 'dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      localStorage.setItem('mode', 'light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }

  window.onload = function () {
    if (localStorage.getItem('mode') === "light") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }

  // setInterval(() => {
  //   document.title = "Purchase TextUtils";
  // }, 1000);

  // setInterval(() => {
  //   document.title = "Now at 50% discount";
  // }, 2000);

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} close={closeAlert} />

        <div className="container mt-4">
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path='/textutils' element={<Home heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
