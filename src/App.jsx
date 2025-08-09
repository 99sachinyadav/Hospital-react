 import { useEffect, useState } from "react";
import {Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import About from "./Pages/About";
import MyProfile from "./Pages/MyProfile";
import MyAppointment from "./Pages/MyAppointment";
import Appointment from "./Appointment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'remixicon/fonts/remixicon.css'
import Chatbot from "./Components/Chatbot";
 
import Chaticon from './assets/assets_admin/Chaticon.png';
 

function App() {
   const navigate = useNavigate();
   const [open, setopen] = useState(true)
    const location = useLocation();
 useEffect(() => {
    if (location.pathname === "/chatbot") {
      setopen(false);
    } else {
      setopen(true);
    }
  }, [location.pathname]); 
  return (
    <>
      <div className=" mx-4 sm:mx-[10%]  ">

          <div onClick={()=>{navigate('/chatbot'),setopen(false)}} className={` sticky top-[800px] flex items-center justify-center  w-24 h-24 bottom-[200px] rounded-full ${open?"block":"hidden"}  ml-auto mr-[-100px] z-50`}>
     <img  className="w-30 h-30" src={Chaticon} alt="" />
  </div>
         <Navbar/>
        <Routes>
            <Route path="/chatbot" element={<Chatbot setopen={setopen}/>} />
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
        
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
