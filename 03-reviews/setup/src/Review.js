import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'


const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNumber = number => {
    if (number > people.length - 1) return 0
    if (number < 0) return people.length - 1
    return number
  }

  const handleNextBtn = index => {
    setIndex(index => {
      return checkNumber(index + 1)
    })
  }

  const handlePrevBtn = index => {
    setIndex(index => {
      return checkNumber(index - 1)
    })
  }

  const handleRandomBtn = () => {
    setIndex(() => {
      let newIndex = checkNumber(Math.round(Math.random() * people.length))
      if (newIndex === index) newIndex = checkNumber(Math.round(Math.random() * people.length))
      return newIndex
    })
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn"
                onClick={handlePrevBtn}
        >
          <FaChevronLeft />
        </button>
        <button className="next-btn"
                onClick={handleNextBtn}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn"
              onClick={handleRandomBtn}
      >
        Surprise me
      </button>
    </article>
  )
}

export default Review
