import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const navigate = useNavigate();
  function navContact() {
    navigate('../contact/Contact.jsx')
  }
  return (
      <main className='container-main-home'>
        <section className='container-home'>
          <h4>UI and UX design</h4>
          <h1>Best design for your <span>DIGITAL PRODUCTS.</span></h1>
          <div className='textPresent'>
            <p className='line'></p>
            <p> Hello I am Laime Rodrigo front-end developer and i love. <br /> Desing technology, the art of design.</p>
          </div>
          <button className='clickMe' onClick={navContact}>
              CLICK ME
              <i className="fa-solid fa-arrow-right"></i>
            
          </button>
          <div className='huallhaveMovil'></div>


          {/*  <h3>Love on UI & UX</h3>
          <h1>best design for your digital products</h1>
          <ul>
            <li>Desing technology. The art of design.</li>
            <li>front-end developer & back-end
            </li>
            <li>I am Laime Rodrigo</li>
          </ul>
          <p className='line-color-one'></p>
          <p className='line-color-two'></p>
          <p className='line-color-three'></p>
          <button
            onClick={navContact}
            className='button-home'
          >click here</button>
 */}
        </section>

        <section className='conatiner-home-left'>
        </section>
      </main>
  )
}
export { Home }