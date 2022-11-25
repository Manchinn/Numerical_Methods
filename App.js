import { NavBar } from './NavBar';
import Home from './Element/Home';
import Bisection from './Element/Bisection';
import FalsePosition from './Element/FalsePosition';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import OnePoint from './Element/OnePoint';
import NewtonRaphson from './Element/NewtonRaphson';
import Secant from './Element/Secant';
import Carmer from './Element/Carmer';
import GaussElimination from './Element/GaussElimination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bisection" element={<Bisection/>}/>
        <Route path="/False-Position" element={<FalsePosition/>}/>
        <Route path="/One-Point" element={<OnePoint/>}/>
        <Route path="/Newton-Raphson" element={<NewtonRaphson/>}/>
        <Route path="/Secant" element={<Secant/>}/>
        <Route path="/Carmer" element={<Carmer/>}/>
        <Route path="/GaussElimination" element={<GaussElimination/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
