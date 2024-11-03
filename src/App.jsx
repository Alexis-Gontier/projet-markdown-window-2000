import './styles/tailwind.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardID from './pages/DashboardID';
import NotFound from './pages/NotFound';
import Game from './pages/PlusOuMoins';

// Layouts
import Taskbar from './layouts/Taskbar';
import MainLayout from './layouts/MainLayout';


function App() {

  return (
    <BrowserRouter>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/:id" element={<DashboardID />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Taskbar />

    </BrowserRouter>

  )
}

export default App
