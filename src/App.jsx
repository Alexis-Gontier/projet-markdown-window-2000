import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './components/page/Dashboard';
import Home from './components/page/Home';

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>Projet React</h1>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
