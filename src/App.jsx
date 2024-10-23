import './styles/App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Layouts
import MainLayout from './layouts/MainLayout';
import CatFactDuJour from './components/api/Cats';
import TrueFalseDuJour from './components/api/TrueFalse';

function App() {

  return (
    <BrowserRouter>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CatFactDuJour/>
      <TrueFalseDuJour/>
    </BrowserRouter>

  )
}

export default App
