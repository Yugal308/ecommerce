import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import About from './Components/About';
import Contact from './Components/Contact';
import Errorpage from './Components/Errorpage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path = "*" element={<Errorpage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
