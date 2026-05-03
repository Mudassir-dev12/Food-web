import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Contactpage from "./Components/Contactpage";
import Aboutpage from "./Components/Aboutpage";
import Fooditems from "./Components/fooditems";
import CartPanel from "./Components/CartPanel";

const App = () => {
  return (
    <Router>
      <Navbar />
      <CartPanel />
      <div className='w-full relative top-[80px] h-auto'>
        <Routes className='content w-full relative top-[5vw] h-auto '>
          <Route path='/' element={<Homepage />} />
          <Route path='/mainpages/foodspage' element={<Fooditems />} />
          <Route path='/mainpages/aboutpage' element={<Aboutpage />} />
          <Route path='/mainpages/contactpage' element={<Contactpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
