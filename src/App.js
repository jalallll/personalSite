<<<<<<< HEAD
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
=======
import { Box, Stack } from "@mui/material";
import React from "react";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer";
import Nav_bar from "./Components/Nav_bar";
import Header from "./Components/Header";
function App() {
	return (
		<div>
			<Nav_bar />
			<div class="bg-black">
				<Header />
			</div>
		</div>
	);
}

>>>>>>> 594d9e1e8c8307021472fc0f95e60a16d8b3a8c2
export default App;
