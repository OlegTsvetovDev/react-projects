const getPosition = (i, index, sliderLength) => {
  let position = "nextSlide"

  if (i === index) position = "activeSlide"
  if (i === index - 1 || (index === 0 && i === sliderLength - 1)) position = "lastSlide"

  return position
}


export default getPosition
