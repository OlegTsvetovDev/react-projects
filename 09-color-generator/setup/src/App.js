import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'


const initialList = new Values('#f12332').all(5)

function App() {
  const [color, setColor] = useState('#f12332')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState(initialList)

  const handleSubmit = e => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setIsError(false)
    } catch (e) {
      console.log(e)
      setIsError(true)
    }
  }

  const handleChange = e => {
    setColor(e.target.value)
  }

  useEffect(() => {
    // console.log(list)
  }, [list])

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form
          onSubmit={handleSubmit}
        >
          <input type="text" placeholder="#f15025"
            value={color} onChange={handleChange}
            className={isError ? 'error' : ''}
          />
          <button type="submit" className="btn"
            onSubmit={handleSubmit}
          >
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((item, i) =>
            <SingleColor key={i} {...item} index={i} />
          )
        }
      </section>
    </>
  )
}


export default App
