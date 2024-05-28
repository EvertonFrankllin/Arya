import './App.css';

//importando os componentes
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Section from './components/Section';
import Contato from './components/Contato';


function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Section />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
