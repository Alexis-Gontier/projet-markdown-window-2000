import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
        <h1 className="text-7xl font-extrabold">Projet React</h1>
        <ul className="flex items-center gap-2">
          <li className="hover:underline hover:text-primary"><NavLink to="/">Accueil</NavLink></li>
          <li className="hover:underline hover:text-primary"><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
    </>
  )
}
