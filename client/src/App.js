import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Card/Cards';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products' >
          <Cards />
        </Route>
        <Route path='/contact' >
          <Contact />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
