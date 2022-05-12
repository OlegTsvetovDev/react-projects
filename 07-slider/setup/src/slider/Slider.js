import React, { useEffect } from 'react'
import SectionCenter from './SectionCenter'


const Slider = ({ index, setIndex, people, setPeople, sliderInterval = 3000 }) => {

  useEffect(() => {
    if (index < 0) return setIndex(people.length - 1)
    if (index > people.length - 1) return setIndex(0)
  }, [index, people, setIndex])

  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), sliderInterval)
    return () => {
      clearInterval(slider)
    }
  }, [index, setIndex, sliderInterval])

  const handleNextSlide = index =>
    setIndex(index + 1)

  const handlePrevSlide = index =>
    setIndex(index - 1)

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <SectionCenter
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        people={people}
        setPeople={setPeople}
        index={index}
        setIndex={setIndex}
      />
    </section>
  )
}


export default Slider
