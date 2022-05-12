import React from 'react'
import SectionContent from './SectionContent'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


const SectionCenter = ({ index, setIndex, people, setPeople, handleNextSlide, handlePrevSlide }) => {

  return (
    <div className="section-center">
      <SectionContent
        people={people}
        index={index}
      />
      <button
        className="prev"
        onClick={() => handlePrevSlide(index)}
      >
        <FiChevronLeft />
      </button>
      <button
        className="next"
        onClick={() => handleNextSlide(index)}
      >
        <FiChevronRight />
      </button>
    </div>
  )
}


export default SectionCenter
