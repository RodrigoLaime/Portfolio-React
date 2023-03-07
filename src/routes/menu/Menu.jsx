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

  const handleClick = () => {
    const navM = document.getElementById('navM');

    navM.classList.toggle('desplazar')
  }

  return (
    <div className='container-nav'>
      <nav className='menu-nav '>
        <h4 className='menu-h4'> <span> Portafolio</span> | Rodrigo</h4>
        <button
          onClick={handleClick}
          className='icon-menu'><i className="fa-solid fa-bars-staggered"></i>
        </button>



        <section className='menu-desktop'>
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
                </NavLink >
              </div >
            ))}
          </ul >
        </section>

      </nav >

      <section id="navM" className='container-menu-movil' >
        <article className='container-movil'>
          <ul>
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
            <li className='follow'>
              <a href=""><i class="fa-solid fa-envelope"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
              <a href=""><i class="fa-brands fa-github"></i></a>
            </li>
          </ul>
        </article>
      </section>

    </div >
  )
}


export { Menu }