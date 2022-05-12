import React from 'react'
import { socials } from './data'


const Sidebar = () => {
  return (
    <ul className="social-icons">
        {
          socials.map(social =>
            <li key={social.id}>
              <a href={social.url}>{social.icon}</a>
            </li>
          )
        }
    </ul>
  )
}


export default Sidebar
