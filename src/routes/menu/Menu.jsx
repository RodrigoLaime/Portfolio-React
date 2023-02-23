import React, { useState } from 'react'
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

  const [cliket, setCliket] = useState(false);
  const handleClick = () => {
    setCliket(!cliket);
  }


  return (
    <div className='container-nav'>
      <nav className='menu-nav '>
        <h4 className='menu-h4'> <span> RODRY </span> <br /> GO</h4>
        <ul className='menu-ul'>
          {routes.map(route => (
            <div
              key={route.text}
              className='menu-li'>
              <NavLink
                className='a'
                key={routes.text}
                style={({ isActive }) => ({
                  color: isActive ? ' #ffffffa2' : '',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </div>
          ))}
        </ul>

      </nav >

      <nav className='menu-nav-movil activar'>
        <button
          /*  handleClick={handleClick} */
          className='icon-menu'><i class="fa-solid fa-bars-staggered"></i></button>
        <div className='container-menu-movil activar' >
          <ul>
            <h4 className='menu-h4'> <span> RODRI</span>GO</h4>
            {routes.map(route => (
              <div
                key={route.text}
                className='menu-li-movil'>
                <NavLink
                  className='a-movil'
                  key={routes.text}
                  style={({ isActive }) => ({
                    color: isActive ? ' #ffffffa2' : '',
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </div>
            ))}
          </ul>
          {
            () => (
              <div className='bacio-nav' isActive></div>
            )
          }
        </div>
      </nav>
    </div>
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