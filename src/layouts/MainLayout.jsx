import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
        <ul className="fixed top-0 left-0 flex items-center gap-2">
          <li className="hover:underline"><NavLink to="/">Home</NavLink></li>
          <li className="hover:underline"><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
    </>
  )
}
