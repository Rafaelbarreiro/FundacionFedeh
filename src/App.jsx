import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from './components/About/About';
import Nav from './components/NavBar/Nav';
import Footer from './components/Footer/Footer'
import ArticleDetail from './components/ArticleDetail/ArticleDetail'
import JoinForm from './components/JoinForm/JoinForm';
import Donate from './components/Donate/Donate';
import Funtioning from "./components/Functioning/Functioning"
import Legal from './components/Legal/Legal';
import Contact from "./components/Contact/Contact";
import JoinDonate from "./components/JoinDonate/JoinDonate"
import History from './components/History/History';
import BloodDonate from './components/BloodDonate/BloodDonate';
import EventDetail from './components/EventDetail/EventDetail';
import AllEvents from './containers/AllEvents/AllEvents'
//importar el eventDetail una vez hecho
import { ProtectedAdmin } from './components/ProtectedAdmin';
import { populateDB } from "./redux/actions";
import Donaciones from './ComponentesDos/Donacion'



function App() {
  //populateDB();



  return (
    <div >

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detail/:id" element={<ArticleDetail />} />
          <Route exact path="/sumate" element={<JoinForm />} />
          <Route exact path="/donar" element={<Donate />} />
          <Route exact path="/funcionamiento" element={<Funtioning />} />
          <Route exact path="/legales" element={<Legal />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/historia" element={<History />} />
          <Route exact path="/sumateOdona" element={<JoinDonate />} />
          <Route exact path="/donaciónDeSangre" element={<BloodDonate />} />
          {/* hacer y cambiar el articledetail por eventdetail */}
          <Route exact path="/event/:_id" element={<EventDetail />} />
          <Route exact path="/events" element={<AllEvents />} />
          {/* Rutas nuevas para mostrar los componentes*/}
          < Route path='/donaciones' element={<Donaciones />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
