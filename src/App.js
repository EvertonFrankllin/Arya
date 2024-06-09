import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../src/Styles/App.css'; 

// *importando os componentes!

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Plano from './components/plano/Plano';
import WhyArya from './components/Why/whyArya';
import Contact from './components/Contact/Contact';
import Footer from './components/Footter/Footer';

//Import Rotas
import Login from './components/login/Login';



function App() {
  return (
    
      <Router className="App">

          <Routes>
            <Route path='/Login' element={<Login /> } ></Route>
          </Routes>

          <Header />
          <Home />
          <About />
          <Plano />
          <WhyArya />
          <Contact />
          <Footer />
          
      </Router>
    
  );
}

export default App;
