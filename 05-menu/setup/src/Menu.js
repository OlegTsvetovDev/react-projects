import React from 'react'
import MenuItem from './menuItem'


const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {
        menuItems.map((menuItem, index) =>
          <MenuItem key={index} menuItem={menuItem} />)
      }
    </div>
  )
}


export default Menu
