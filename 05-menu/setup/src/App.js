import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'


const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)

  const filterItems = category => {
    if (category === allCategories[0])
      return setMenuItems(items)

    const newItems = items.filter(item =>
      item.category === category
    )
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}


export default App
