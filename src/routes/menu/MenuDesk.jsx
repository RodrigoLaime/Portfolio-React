import React from 'react'

function MenuDesk() {
  return (
    <>
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
      </ul></>
  )
}

export default MenuDesk