import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Portfolio />
      <Education />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
