import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componants/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AnimatedBackground from "./componants/AnimatedBackground";

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
