import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/destination">Destination</Link></li>
        <li><Link to="/envision">Envision</Link></li>
        <li><Link to="/budget">Budget</Link></li>
        <li><Link to="/preferences">Preferences</Link></li>
      </ul>
    </nav>
  )
}