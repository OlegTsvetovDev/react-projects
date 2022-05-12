import React from 'react'
import { links } from './data'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'


const Menu = () => {
  return (
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">
        <ul className="links">
          {
            links.map(link =>
              <li key={ link.id }>
                <a href={ link.url }>{ link.text }</a>
              </li>
            )
          }
        </ul>
      </div>
      <Sidebar />
    </div>
  )
}


export default Menu
