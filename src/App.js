import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Routes,Route}from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route exact path='/about'  element={<About/>}/>
        <Route exact path='/menu'  element={<Menu/>}/>
        <Route exact path='/contact'  element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
