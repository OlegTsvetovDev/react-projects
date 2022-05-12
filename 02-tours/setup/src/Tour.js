import React, { useState } from 'react'


const Tour = ({id, name, image, info, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false)

  const handleClick = () => {
    setReadMore(!readMore)
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {
            readMore
              ?
                info
              :
                info.substring(0, 200)
          }
          <button className="read-more"
                  onClick={handleClick}
          >
            {
              readMore
                ? 'Show less'
                : 'Read more'
            }
          </button>
        </p>
        <button className="delete-btn"
                onClick={() => removeTour(id)}
        >Not interested</button>
      </footer>
    </article>
  )
}


export default Tour
