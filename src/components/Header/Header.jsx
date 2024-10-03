import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <div >
       <ul className='header'>
        <div className='header-text'>
          <h5>Твоё образование</h5>
          <p>Дополнительное образование и курсы обучения онлайн</p>
        </div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/main">Main</Link>
      </li>
       <li>
      <Link to="/example">Example</Link>
       </li>
      <button>Вход</button>
     </ul>
    </div>
  )
}

export default Header
