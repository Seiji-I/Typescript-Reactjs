import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Welcome from "./Greeting";
import NavMenu from "./NavMenu";

const Contents: React.FC = () => {
  return(
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route index element={<Welcome />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default Contents;