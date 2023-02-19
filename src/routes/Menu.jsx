import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'
const Menu = () => {
  return (
    <nav className='menu-nav'>
      <ul className='menu-ul'>
        {routes.map(route => (
          <li className='menu-li'>
            <NavLink
              className='a'
              key={routes.text}
              style={({ isActive }) => ({
                color: isActive ? '#2acfcf' : '',
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const routes = [];
routes.push({
  to: '/',
  text: 'Home'
})
routes.push({
  to: '/about',
  text: 'About'
})
routes.push({
  to: '/jobs',
  text: 'Jobs'
})
routes.push({
  to: '/contact',
  text: 'Contact'
})

export { Menu }