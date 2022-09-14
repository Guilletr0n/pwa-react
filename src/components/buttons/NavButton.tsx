import { Link } from 'react-router-dom'
import { NavigationLink } from '../types'

export default function NavButton(props:NavigationLink) {
  return (
    <Link 
      className={`navigation-item ${props.direction? props.direction : ''}`}
      to={props.link}>
      {props.label}
    </Link>
  )
}