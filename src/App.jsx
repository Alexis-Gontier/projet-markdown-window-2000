import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1 className="text-7xl font-extrabold">Projet React</h1>
        <ul className="flex items-center gap-2">
          <li className="hover:underline hover:text-primary"><NavLink to="/">Accueil</NavLink></li>
          <li className="hover:underline hover:text-primary"><NavLink to="/dashboard">Dashboard</NavLink></li>
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
