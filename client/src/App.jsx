import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Doctors from "./pages/Doctors"
import Appointment from "./pages/Appointment"
import MyProfile from "./pages/MyProfile"
import MyAppointments from "./pages/MyAppointments"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Login from "./pages/Login"


function App() {
 

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
        <Route path="/my-profile" element={<MyProfile/>}></Route>
        <Route path="/my-appointments" element={<MyAppointments/>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
