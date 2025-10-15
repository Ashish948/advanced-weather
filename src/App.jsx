import { useEffect } from 'react'
import { Bodies, Nav2, Navbar } from './components/index';
import './App.css'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MyDashboard from './components/MyDashboard';
import Hourly from './components/Hourly';
import TenDay from './components/TenDay';
import Monthly from './components/Monthly';
import Today from './components/Today';
import SignIn from './components/SignIn'
import CreateAcount from './components/CreateAcount';
import UserContextProvider from './context/UserContextProvider';

function App() {
  const location = useLocation(); 
  const path = location.pathname;

  return (
    <>
      <Navbar />
      {path !== "/" && <Nav2 />}

      
      <UserContextProvider>
      <Routes>
        <Route path="/home" element={<Bodies />} />
        <Route path="/Today" element={<Today />} />
        <Route path="/MyDashboard" element={<MyDashboard />} /> 
        <Route path="/Hourly" element={<Hourly />} />
        <Route path="/TenDay" element={<TenDay />} />
        <Route path="/Monthly" element={<Monthly />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAcount />} />
      </Routes>
      </UserContextProvider>

      {path === "/" && <Nav2 />}
    </>
  )
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}










