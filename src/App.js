import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Internship from "./Components/Internship";
import Courses from "./Components/Courses";
import Works from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="works"><Works /></div>
      <div id="services"><Services /></div>
      <div id="courses"><Courses /></div>
      <div id="internship"><Internship /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
