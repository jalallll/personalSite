import React from "react";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
