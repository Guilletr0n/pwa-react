import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="MHM-header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/preferences">Preferences</Link></li>
          <li><Link to="/destination">Destination</Link></li>
        </ul>
      </nav>
    </header>
  );
}