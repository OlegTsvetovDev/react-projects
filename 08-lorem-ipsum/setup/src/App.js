import React, { useState, useEffect } from 'react'
import data from './data'


function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    const parsedCount = parseInt(count)
    setText(data.slice(0, parsedCount))
  }

  const handleChange = e => {
    e.preventDefault()
    setCount(e.target.value)
  }

  useEffect(() => {
    if (count < 0) setCount(0)
    if (count > data.length) setCount(data.length)
  }, [count])

  return (
    <section className="section-center">
      <h3>Tired of boringlorem ipsum?</h3>
      <form className="lorem-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name="amount" id="amount"
          value={count}
          onChange={e => handleChange(e)}
        />
        <button type="submit" className="btn"
          disabled={(count < 1) ? 'disabled' : ''}
        >generate</button>
      </form>
      <article className="lorem-text">
        {
          text.map((paragraph, i) =>
            <p key={i}>{i + 1}. {paragraph}</p>
          )
        }
      </article>
    </section>
  )
}

export default App
