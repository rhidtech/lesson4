import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>

<div className="App">
  <ul>
    <li>
      <Link to ="/">Home</Link>
    </li>

    <li>
      <Link to ="/about">About</Link>
    </li>

    <li>
      <Link to ="/contact">Contact</Link>
    </li>
  </ul>
</div>

      <Routes>
        <Route exact path = '/' element = {<Home/>}> Home</Route>
        <Route exact path = '/about' element = {<About/>}>About </Route>
        <Route exact path = '/contact' element = {<Contact/>}> Contact </Route>
      </Routes>
    </Router>
  );
}

export default App;
