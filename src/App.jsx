import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/pages/HomePage";
import AboutPage from "./assets/pages/AboutPage";
import MissionPage from "./assets/pages/MissionPage";
import AdmissionPage from "./assets/pages/AdmissionPage";
import ContactPage from "./assets/pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/mission" element={<MissionPage />} />
        <Route exact path="/admission" element={<AdmissionPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
