import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import './Jobs.css'

const Jobs = () => {
  const navigate = useNavigate();
  const navContact = () => {
    navigate('../contact/Contact.jsx')
  };

  return (
    <>
      <div className='div-container-jobs'>
        <section className='container-jobs'>
          <div className='jobs-title'>
            <h2>NOTEWORTHY PROYECTS</h2>
            <p>see the files</p>
          </div>

          <div className='container-center-jobs'>
            {trabajos.map(data => (
              <section className='jobs' key={data.key}>
                <p onClick={navContact}>{data.contact}</p>
                <h4>{data.project}</h4>
                <h4>{data.tools}</h4>
                <ul>
                  <li><NavLink
                  to={data.to.github}
                  >💚</NavLink></li>
                  <li><NavLink
                  to={data.to.image}
                  >💙</NavLink></li>
                  <li><NavLink
                   to={data.to.job}
                  >🖤</NavLink></li>
                </ul>
              </section>
            ))}

          </div>

        </section>
      </div>
    </>
  )
}

/* function linkContact({data}){
  return(
    <article className='jobs' key={data.key}>
      <p>{data.contac}</p>
      <h4>{data.project}</h4>
      <h4>{data.tools}</h4>
      <ul>
        <li>💚</li>
        <li>💙</li>
        <li>🖤</li>
      </ul>
    </article>
  )
} */

const trabajos = [];
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 1,
  to:{
    github: 'https://www.google.com/search?q=traductor&rlz=1C1ALOY_esAR1043AR1043&oq=traductor&aqs=chrome..69i57j35i39j0i131i433i512j0i67i131i433j0i512j0i131i433i512j0i512j0i131i433i512j0i433i512j0i131i433i512.3779j0j7&sourceid=chrome&ie=UTF-8',
    image: '',
    job: '',
  }
})
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 2,
  to:{
    github: '',
    image: '',
    job: '',
  }
})
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 3,
  to:{
    github: '',
    image: '',
    job: '',
  }
})
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 4,
  to:{
    github: '',
    image: '',
    job: '',
  }
})
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 5,
  to:{
    github: '',
    image: '',
    job: '',
  }
})
trabajos.push({
  contact: 'Contact me',
  project: 'Proyect: google clone ligth',
  tools: 'Used Tools: HTML5 and CSS',
  key: 6,
  to:{
    github: '',
    image: '',
    job: '',
  }
})

export { Jobs }