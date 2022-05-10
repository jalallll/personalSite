import React from "react";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// import my components
import Home from "./Home";
import Contact from "./Contact";
import Resume from "./Resume";
const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/resume" element={<Resume/>}>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
