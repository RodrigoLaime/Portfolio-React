import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

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

const Menu = () => {
  return (
    <nav className='menu-nav' >
      <h4 className='menu-h4'>DiseñoUX</h4>
      <ul className='menu-ul'>
        {routes.map(route => (
          <div
            key={route.text}
            className='menu-li'>
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
          </div>
        ))}
      </ul>

    </nav >
  )
}



/* function s() {
  return (
    <div
      key={route.text}
      className='menu-li'>
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
    </div>
  )
} */

export { Menu }