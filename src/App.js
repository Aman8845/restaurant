import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Testimonial from './Components/Testimonial/Testimonial';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
