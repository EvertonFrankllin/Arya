import '../src/Styles/App.css';

// *importando os componentes!

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Plano from './components/plano/Plano';
import WhyArya from './components/Why/whyArya';
import Contact from './components/Contact/Contact';
import Footer from './components/Footter/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Plano />
      <WhyArya />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
