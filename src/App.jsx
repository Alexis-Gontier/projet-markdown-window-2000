import './styles/tailwind.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

// Layouts
import Taskbar from './layouts/Taskbar';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <BrowserRouter>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Taskbar /> */}

    </BrowserRouter>

  )
}

export default App
