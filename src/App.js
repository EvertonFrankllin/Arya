import '../src/Styles/App.css';

//importando os componentes
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footter/Footer';
import About from './components/About/About';
import WhyArya from './components/Why/whyArya';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <WhyArya />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
