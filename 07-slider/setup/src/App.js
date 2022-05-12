import React, { useState, useEffect } from 'react'
import data from './data'
import Slider from './slider/Slider'


function App() {
  const [people, setPeople] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setPeople(data)
  }, [])

  return (
    <Slider
      people={people} setPeople={setPeople}
      index={index} setIndex={setIndex}
      sliderInterval={5000}
    />
  )
}


export default App
