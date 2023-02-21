import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const navigate = useNavigate();
  function navContact() {
    navigate('../contact/Contact.jsx')
  }
  return (
    <>
      <main className='container-main-home'>
        <section className='container-home'>
          <h3>Love on UI & UX</h3>
          <h1>PORTFOLIO 02</h1>
          <p className='line-color'></p>
          <ul>
            <li>Desing technology. The art of design.</li>
            <li>front-end developer & back-end
            </li>
            <li>I am Laime Rodrigo</li>
          </ul>
          <button
            onClick={navContact}
            className='button-home'
          >seguir</button>
        </section>
      </main>
    </>
  )
}
export { Home }