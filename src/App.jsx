import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import your page components here
import Home from "@/pages/Home";
import WhatWeDo from "@/pages/WhatWeDo";
import WhoWeAre from "@/pages/WhoWeAre";
import Contact from "@/pages/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
