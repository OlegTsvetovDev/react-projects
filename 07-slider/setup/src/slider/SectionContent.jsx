import React from 'react'
import getPosition from './getPosition'
import { FaQuoteRight } from 'react-icons/fa'


const SectionContent = ({ people, index }) => {
  return (
    <>
      {
        people.map((person, i) => {
          const {id, image, name, title, quote} = person

          const position = getPosition(i, index, people.length)

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img"/>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })
      }
    </>
  )

}


export default SectionContent
